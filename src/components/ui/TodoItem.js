import React, { useState } from 'react';
import CheckBox from './CheckBox';
import PriorityDropdown from './PriorityDropdown'; 

export default function TodoItem({ data, changeStatus, updatePriority, updateDueDate }) {
    const [selectedPriority, setSelectedPriority] = useState(data.priority);
    const [dueDate, setDueDate] = useState(data.dueDate || ''); 
    const [completed, setCompleted] = useState(data.completed);

    const handleStatusChange = (checked) => {
        setCompleted(checked);
        changeStatus(data.id, checked); 
    };

    const handlePriorityChange = (e) => {
        const newPriority = e.target.value; 
        setSelectedPriority(newPriority);
        updatePriority(data.id, newPriority);
    };

    const handleDueDateChange = (e) => {
        const newDueDate = e.target.value; 
        setDueDate(newDueDate); 
        updateDueDate(data.id, newDueDate); 
    };

    const className = `todo-item ui-state-default ${completed ? "completed" : "pending"}`;

    const priorityStyle = {
        color:
            selectedPriority === "High"
                ? "red"
                : selectedPriority === "Medium"
                ? "orange"
                : "green",
        fontWeight: "bold",
        marginLeft: "10px",
    };

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <div>
                        <CheckBox checked={completed} onChange={handleStatusChange} />
                        <span>{data.text}</span>
                    </div>
                    
                    <span style={priorityStyle}> ({selectedPriority} Priority)</span>
                    
                    <PriorityDropdown
                        selectedPriority={selectedPriority}
                        onPriorityChange={handlePriorityChange}
                    />
                    
                    <br />
                    <span>Due Date: </span>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={handleDueDateChange}
                    />
                </label>
            </div>
        </li>
    );
}