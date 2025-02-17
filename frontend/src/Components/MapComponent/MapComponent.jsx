import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Loading spinner component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
);

const MapComponent = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [places, setPlaces] = useState([]);
    const [resourceType, setResourceType] = useState("library");
    const [loadingLocation, setLoadingLocation] = useState(true); // State for loading location
    const [locationError, setLocationError] = useState(""); // State for error handling
    const [range, setRange] = useState(5000); // Default range (in meters)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                setLoadingLocation(false); // Location fetched, stop loading
            },
            (error) => {
                console.error(error);
                setLocationError("Unable to retrieve your location."); // Set error if geolocation fails
                setLoadingLocation(false); // Stop loading even if there is an error
            }
        );
    }, []);

    const fetchPlaces = async (type, range) => {
        if (loadingLocation) return; // Prevent fetching if location is still loading
        if (!lat || !lng) return setLocationError("Location not available"); // Error if location is not available

        const osmTags = {
            library: "amenity=library",
            bathroom: "amenity=toilets",
            water_fountain: "amenity=drinking_water",
            hospital: "amenity=hospital",
            charging_station: "amenity=charging_station",
        };

        const query = `
      [out:json];
      node[${osmTags[type]}](around:${range}, ${lat}, ${lng});
      out;
    `;

        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

        try {
            const response = await axios.get(url);
            const results = response.data.elements.map((node) => ({
                name: node.tags?.name || "Unknown",
                lat: node.lat,
                lng: node.lon,
            }));
            setPlaces(results);
        } catch (error) {
            console.error("Error fetching places:", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Find Nearby Resources</h2>

            {/* Location error message */}
            {locationError && (
                <div className="text-red-500 text-center mb-4">{locationError}</div>
            )}

            {/* Loading Spinner */}
            {loadingLocation ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <select
                            onChange={(e) => setResourceType(e.target.value)}
                            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="library">Libraries</option>
                            <option value="bathroom">Bathrooms</option>
                            <option value="water_fountain">Water Fountains</option>
                            <option value="hospital">Hospitals</option>
                            <option value="charging_station">Charging Stations</option>
                        </select>

                        {/* Range Selector */}
                        <div className="flex items-center">
                            <label className="mr-2">Range (m):</label>
                            <input
                                type="number"
                                min="100"
                                value={range}
                                onChange={(e) => setRange(Number(e.target.value))}
                                className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
                            />
                        </div>

                        <button
                            onClick={() => fetchPlaces(resourceType, range)}
                            className="ml-4 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                        >
                            Find
                        </button>
                    </div>

                    {lat && lng && !locationError && (
                        <div className="mt-6">
                            <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                {/* Current Location Marker with Red Popup */}
                                <Marker position={[lat, lng]}>
                                    <Popup className="text-red-500 font-bold">You are here</Popup>
                                </Marker>
                                {places.map((place, index) => (
                                    <Marker key={index} position={[place.lat, place.lng]}>
                                        <Popup>{place.name}</Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MapComponent;
