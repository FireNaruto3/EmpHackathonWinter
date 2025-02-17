import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [places, setPlaces] = useState([]);
  const [resourceType, setResourceType] = useState("library");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (error) => console.error(error)
    );
  }, []);

  const fetchPlaces = async (type) => {
    if (!lat || !lng) return alert("Location not available");

    const osmTags = {
      library: "amenity=library",
      bathroom: "amenity=toilets",
      water_fountain: "amenity=drinking_water",
    };

    const query = `
      [out:json];
      node[${osmTags[type]}](around:5000, ${lat}, ${lng});
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
      <div className="flex items-center justify-between mb-4">
        <select
          onChange={(e) => setResourceType(e.target.value)}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="library">Libraries</option>
          <option value="bathroom">Bathrooms</option>
          <option value="water_fountain">Water Fountains</option>
        </select>
        <button
          onClick={() => fetchPlaces(resourceType)}
          className="ml-4 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        >
          Find
        </button>
      </div>

      {lat && lng && (
        <div className="mt-6">
          <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]}>
              <Popup className="text-red-500">You are here</Popup> {/* Apply red color here */}
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
  );
};

export default MapComponent;
