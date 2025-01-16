namespace App\Policies;

use App\Models\Booking;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BookingPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id || $user->id === $booking->property->user_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id || $user->id === $booking->property->user_id;
    }

    public function delete(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id;
    }

    public function restore(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id;
    }

    public function forceDelete(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id;
    }
} 