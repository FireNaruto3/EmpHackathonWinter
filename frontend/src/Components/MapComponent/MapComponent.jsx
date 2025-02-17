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
        <div>
            <h2>Find Nearby Resources</h2>
            <select onChange={(e) => setResourceType(e.target.value)}>
                <option value="library">Libraries</option>
                <option value="bathroom">Bathrooms</option>
                <option value="water_fountain">Water Fountains</option>
            </select>
            <button onClick={() => fetchPlaces(resourceType)}>Find</button>

            {lat && lng && (
                <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[lat, lng]}>
                        <Popup>You are here</Popup>
                    </Marker>
                    {places.map((place, index) => (
                        <Marker key={index} position={[place.lat, place.lng]}>
                            <Popup>{place.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            )}
        </div>
    );
};

export default MapComponent;
