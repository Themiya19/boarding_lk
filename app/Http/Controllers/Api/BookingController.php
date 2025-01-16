namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $bookings = $request->user()->bookings()
            ->with(['property.images', 'property.user'])
            ->when($request->status, function ($query) use ($request) {
                $query->where('status', $request->status);
            })
            ->latest()
            ->paginate(10);

        return response()->json($bookings);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'property_id' => 'required|exists:properties,id',
            'check_in' => 'required|date|after:today',
            'check_out' => 'required|date|after:check_in',
            'guests' => 'required|integer|min:1',
            'special_requests' => 'nullable|string'
        ]);

        $property = Property::findOrFail($validated['property_id']);

        // Check if property is available
        if (!$property->is_available) {
            throw ValidationException::withMessages([
                'property_id' => ['This property is not available for booking.']
            ]);
        }

        // Check if guests count is within property limit
        if ($validated['guests'] > $property->max_guests) {
            throw ValidationException::withMessages([
                'guests' => ['The number of guests exceeds the property limit.']
            ]);
        }

        // Check for date conflicts
        $conflictingBookings = $property->bookings()
            ->where(function ($query) use ($validated) {
                $query->whereBetween('check_in', [$validated['check_in'], $validated['check_out']])
                    ->orWhereBetween('check_out', [$validated['check_in'], $validated['check_out']])
                    ->orWhere(function ($q) use ($validated) {
                        $q->where('check_in', '<=', $validated['check_in'])
                            ->where('check_out', '>=', $validated['check_out']);
                    });
            })
            ->where('status', '!=', 'cancelled')
            ->exists();

        if ($conflictingBookings) {
            throw ValidationException::withMessages([
                'check_in' => ['The property is not available for the selected dates.']
            ]);
        }

        // Calculate total price
        $checkIn = new \DateTime($validated['check_in']);
        $checkOut = new \DateTime($validated['check_out']);
        $nights = $checkIn->diff($checkOut)->days;
        $totalPrice = $property->price_per_night * $nights;

        $booking = $request->user()->bookings()->create([
            'property_id' => $validated['property_id'],
            'check_in' => $validated['check_in'],
            'check_out' => $validated['check_out'],
            'guests' => $validated['guests'],
            'total_price' => $totalPrice,
            'special_requests' => $validated['special_requests'] ?? null,
            'status' => 'pending'
        ]);

        return response()->json($booking->load('property'), 201);
    }

    public function show(Booking $booking)
    {
        $this->authorize('view', $booking);
        return response()->json($booking->load(['property.images', 'property.user']));
    }

    public function update(Request $request, Booking $booking)
    {
        $this->authorize('update', $booking);

        if ($booking->status === 'cancelled') {
            throw ValidationException::withMessages([
                'status' => ['Cannot modify a cancelled booking.']
            ]);
        }

        $validated = $request->validate([
            'check_in' => 'sometimes|date|after:today',
            'check_out' => 'sometimes|date|after:check_in',
            'guests' => 'sometimes|integer|min:1',
            'special_requests' => 'nullable|string',
            'status' => 'sometimes|in:pending,confirmed,cancelled,completed'
        ]);

        if (isset($validated['guests']) && $validated['guests'] > $booking->property->max_guests) {
            throw ValidationException::withMessages([
                'guests' => ['The number of guests exceeds the property limit.']
            ]);
        }

        // If dates are being updated, check for conflicts
        if (isset($validated['check_in']) || isset($validated['check_out'])) {
            $checkIn = $validated['check_in'] ?? $booking->check_in;
            $checkOut = $validated['check_out'] ?? $booking->check_out;

            $conflictingBookings = $booking->property->bookings()
                ->where('id', '!=', $booking->id)
                ->where(function ($query) use ($checkIn, $checkOut) {
                    $query->whereBetween('check_in', [$checkIn, $checkOut])
                        ->orWhereBetween('check_out', [$checkIn, $checkOut])
                        ->orWhere(function ($q) use ($checkIn, $checkOut) {
                            $q->where('check_in', '<=', $checkIn)
                                ->where('check_out', '>=', $checkOut);
                        });
                })
                ->where('status', '!=', 'cancelled')
                ->exists();

            if ($conflictingBookings) {
                throw ValidationException::withMessages([
                    'check_in' => ['The property is not available for the selected dates.']
                ]);
            }

            // Recalculate total price if dates changed
            $checkInDate = new \DateTime($checkIn);
            $checkOutDate = new \DateTime($checkOut);
            $nights = $checkInDate->diff($checkOutDate)->days;
            $validated['total_price'] = $booking->property->price_per_night * $nights;
        }

        $booking->update($validated);

        return response()->json($booking->load('property'));
    }

    public function destroy(Booking $booking)
    {
        $this->authorize('delete', $booking);
        
        if ($booking->status !== 'pending') {
            throw ValidationException::withMessages([
                'status' => ['Only pending bookings can be deleted.']
            ]);
        }

        $booking->delete();

        return response()->json(['message' => 'Booking cancelled successfully']);
    }

    public function getPropertyBookings(Property $property)
    {
        $bookings = $property->bookings()
            ->where('status', '!=', 'cancelled')
            ->select('check_in', 'check_out')
            ->get();

        return response()->json($bookings);
    }
} 