import React from 'react'
import './Dropdown.css'


const DropDown = ({resources, onSelectResource}) => {
    //first one is variable, second one is function to change variable value.
    const[resources, setSelectedResource] = useState('')

    //how to select
    const handleSelect = (event) => {
        const selected = event.target.value;
        setSelectedResource(selected);
        //this will be later defined in its parent component, resourceList
        onSelectResource(selected);
        

        return (
            <div className="dropdown-container">
                <label htmlFor="resource-dropdown" className="dropdown-label">
                    Select a Resource:
                </label>
                <select
                    id="resource-dropdown"
                    value={selectedResource}
                    onChange={handleSelect}
                    className="dropdown-menu"
                >
                    <option value="" disabled>Select a resource:</option>
                    {resources.map((resource) => (
                        <option key={resource.id} value={resource.id}>
                            {resource.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    };
}

export default DropdownMenu;

