namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $query = Property::with(['images', 'amenities'])
            ->when($request->search, function ($q) use ($request) {
                $q->where('title', 'like', "%{$request->search}%")
                    ->orWhere('description', 'like', "%{$request->search}%")
                    ->orWhere('address', 'like', "%{$request->search}%")
                    ->orWhere('city', 'like', "%{$request->search}%");
            })
            ->when($request->min_price, function ($q) use ($request) {
                $q->where('price_per_night', '>=', $request->min_price);
            })
            ->when($request->max_price, function ($q) use ($request) {
                $q->where('price_per_night', '<=', $request->max_price);
            })
            ->when($request->bedrooms, function ($q) use ($request) {
                $q->where('bedrooms', '>=', $request->bedrooms);
            })
            ->when($request->bathrooms, function ($q) use ($request) {
                $q->where('bathrooms', '>=', $request->bathrooms);
            })
            ->when($request->guests, function ($q) use ($request) {
                $q->where('max_guests', '>=', $request->guests);
            });

        return response()->json($query->paginate(12));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'zip_code' => 'required|string',
            'country' => 'required|string',
            'price_per_night' => 'required|numeric|min:0',
            'bedrooms' => 'required|integer|min:1',
            'bathrooms' => 'required|integer|min:1',
            'max_guests' => 'required|integer|min:1',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'amenities' => 'array',
            'amenities.*' => 'exists:amenities,id',
            'images' => 'required|array|min:1',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $property = $request->user()->properties()->create($validated);

        if ($request->hasFile('images')) {
            $manager = new ImageManager(new Driver());
            
            foreach ($request->file('images') as $index => $image) {
                $path = $image->store('properties', 'public');
                
                // Create thumbnail
                $thumbnail = $manager->read(Storage::disk('public')->path($path));
                $thumbnail->scale(width: 300);
                $thumbnailPath = 'properties/thumbnails/' . basename($path);
                Storage::disk('public')->put($thumbnailPath, $thumbnail->toJpeg());

                $property->images()->create([
                    'image_path' => $path,
                    'is_primary' => $index === 0,
                    'display_order' => $index
                ]);
            }
        }

        if ($request->has('amenities')) {
            $property->amenities()->sync($request->amenities);
        }

        return response()->json($property->load(['images', 'amenities']), 201);
    }

    public function show(Property $property)
    {
        return response()->json($property->load(['images', 'amenities', 'user']));
    }

    public function update(Request $request, Property $property)
    {
        $this->authorize('update', $property);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'address' => 'sometimes|string',
            'city' => 'sometimes|string',
            'state' => 'sometimes|string',
            'zip_code' => 'sometimes|string',
            'country' => 'sometimes|string',
            'price_per_night' => 'sometimes|numeric|min:0',
            'bedrooms' => 'sometimes|integer|min:1',
            'bathrooms' => 'sometimes|integer|min:1',
            'max_guests' => 'sometimes|integer|min:1',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'amenities' => 'sometimes|array',
            'amenities.*' => 'exists:amenities,id',
        ]);

        $property->update($validated);

        if ($request->has('amenities')) {
            $property->amenities()->sync($request->amenities);
        }

        return response()->json($property->load(['images', 'amenities']));
    }

    public function destroy(Property $property)
    {
        $this->authorize('delete', $property);

        // Delete associated images from storage
        foreach ($property->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            Storage::disk('public')->delete('properties/thumbnails/' . basename($image->image_path));
        }

        $property->delete();

        return response()->json(['message' => 'Property deleted successfully']);
    }

    public function uploadImage(Request $request, Property $property)
    {
        $this->authorize('update', $property);

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'is_primary' => 'boolean'
        ]);

        $manager = new ImageManager(new Driver());
        
        $path = $request->file('image')->store('properties', 'public');
        
        // Create thumbnail
        $thumbnail = $manager->read(Storage::disk('public')->path($path));
        $thumbnail->scale(width: 300);
        $thumbnailPath = 'properties/thumbnails/' . basename($path);
        Storage::disk('public')->put($thumbnailPath, $thumbnail->toJpeg());

        if ($request->is_primary) {
            $property->images()->update(['is_primary' => false]);
        }

        $image = $property->images()->create([
            'image_path' => $path,
            'is_primary' => $request->is_primary ?? false,
            'display_order' => $property->images()->max('display_order') + 1
        ]);

        return response()->json($image, 201);
    }

    public function deleteImage(Property $property, $imageId)
    {
        $this->authorize('update', $property);

        $image = $property->images()->findOrFail($imageId);
        
        Storage::disk('public')->delete($image->image_path);
        Storage::disk('public')->delete('properties/thumbnails/' . basename($image->image_path));
        
        $image->delete();

        return response()->json(['message' => 'Image deleted successfully']);
    }
} 