import React from 'react'
import './Dropdown.css'


const DropDown = ({resources, onSelectResource}) => {
    //first one is variable, second one is function to change variable value.
    const[resources, setSelectedResource] = useState('')

    //how to select
    const handleSelect = (event) => {
        const selected = event.target.value;
        setSelectedResource(selected);
        onSelectResource(selected);

        return 
        <div className = "dropdown-container"> 
            <label></label>
        </div>

    }

}

