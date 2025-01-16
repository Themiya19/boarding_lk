namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Amenity;
use Illuminate\Http\Request;

class AmenityController extends Controller
{
    public function index()
    {
        return response()->json(Amenity::orderBy('name')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:amenities',
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255'
        ]);

        $amenity = Amenity::create($validated);

        return response()->json($amenity, 201);
    }

    public function show(Amenity $amenity)
    {
        return response()->json($amenity);
    }

    public function update(Request $request, Amenity $amenity)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255|unique:amenities,name,' . $amenity->id,
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255'
        ]);

        $amenity->update($validated);

        return response()->json($amenity);
    }

    public function destroy(Amenity $amenity)
    {
        $amenity->delete();
        return response()->json(['message' => 'Amenity deleted successfully']);
    }

    public function getByCategory()
    {
        $amenities = Amenity::all()->groupBy('category');
        return response()->json($amenities);
    }
} 