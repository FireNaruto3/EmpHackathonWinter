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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select a Resource</h2>
            
            <select 
                onChange={handleSelectChange} 
                value={selectedResource}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            >
                <option value="">-- Choose a resource --</option>
                {Object.keys(resources).map((resource, index) => (
                    <option key={index} value={resource}>
                        {resource}
                    </option>
                ))}
            </select>

            {selectedResource && (
                <div className="mt-4 p-4 border-t-2 border-gray-200">
                    <h3 className="text-xl font-medium text-gray-800">{selectedResource}:</h3>
                    <p className="text-gray-700 mt-2">{resources[selectedResource]}</p>
                </div>
            )}
        </div>
    );
};

export default ResourceSelector;