import { useState } from "react";
import React from 'react';
import resources from "../../Constants/resources";
import '../../index.css';

const ResourceSelector = () => {
    const [selectedResource, setSelectedResource] = useState("");



    const handleSelectChange = (event) => {
        setSelectedResource(event.target.value);
    };

    return (
        <div>
            <h2>Select a Resource</h2>
            <select onChange={handleSelectChange} value={selectedResource}>
                <option value="">-- Choose a resource --</option>
                {Object.keys(resources).map((resource, index) => (
                    <option key={index} value={resource}>
                        {resource}
                    </option>
                ))}
            </select>

            {selectedResource && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Selected Resource:</h3>
                    <p>{resources[selectedResource]}</p>
                </div>
            )}
        </div>
    );
};

export default ResourceSelector;
