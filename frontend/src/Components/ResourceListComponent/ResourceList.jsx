import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';  // Import the DropdownMenu component


const ResourceList = ({ resources }) => {
    const [selectedResourceId, setSelectedResourceId] = useState('');

    const handleSelectResource = (resourceId) => {
        setSelectedResourceId(resourceId);
    };

    const selectedResource = resources.find((resource) => resource.id === selectedResourceId);

    return (
        <div className="resource-list-container">
            <DropdownMenu
                resources={resources}
                onSelectResource={handleSelectResource}
            />

            {/* Render selected resource details if one is selected */}
            {selectedResource && (
                <div className="selected-resource-details">
                    <h2>{selectedResource.name}</h2>
                    <p>{selectedResource.description}</p>
                    <p>{selectedResource.location}</p>
                    {/* You can display more details or render a ResourceCard here */}
                </div>
            )}
        </div>
    );
};

export default ResourceList;
