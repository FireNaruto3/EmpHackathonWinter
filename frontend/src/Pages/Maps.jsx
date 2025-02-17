import Header from "../Components/HeaderComponent/HeaderComponent"
import MapComponent from "../Components/MapComponent/MapComponent";
import React from "react";
import Footer from "../Components/FooterComponent/FooterComponent";

const Map = ({}) => {
    return (
        <div>
            <Header name="Home Page" />
            <MapComponent></MapComponent>
        </div>
    
    );
}

export default Map;