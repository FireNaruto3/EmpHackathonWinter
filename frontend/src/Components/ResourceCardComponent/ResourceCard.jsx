import React from 'react';
import 'resourceCard.css'

//this is how you define a component, the resource within the curly braces means that this a value that is passed in that can change (it takes from the child componenent)
const ResourceCard = ({ resource }) => {
    return (
        <div className="resource-card">
            <h2 className="resource-card-title">{resource.name}</h2>
            <p className="resource-card-description">{resource.description}</p>
            <p className="resource-card-location">{resource.location}</p>
            <p className="resource-card-contact">{resource.contact || 'No contact info available'}</p>
            <a href={resource.link} className="resource-card-link" target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
};

export default ResourceCard;
