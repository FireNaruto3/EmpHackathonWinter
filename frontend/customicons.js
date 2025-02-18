import L from "leaflet";
import redMarker from "./src/assets/redmarker.jpg"; // Adjust path based on your file structure
import blueMarker from "./src/assets/bluemarker.jpg"; // Adjust path based on your file structure

export const userLocationMarker = L.icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
    iconSize: [16, 16], // Adjust size as needed

});

export const LocationMarker = L.icon({
    iconUrl: "https://th.bing.com/th/id/R.674ee9266c97864017c2352f8d2daf87?rik=wSez2HHhL9EZgA&pid=ImgRaw&r=0",
    iconSize: [10, 10], // Adjust size as needed

});
