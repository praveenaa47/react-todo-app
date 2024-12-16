import React from 'react';

const PriorityDropdown = ({ selectedPriority, onPriorityChange }) => {
    return (
        <select value={selectedPriority} onChange={onPriorityChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    );
};

export default PriorityDropdown;
