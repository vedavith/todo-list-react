import { useState } from "react";

export function NewTodoForm(props) {
    // State
	const [newItem, setNewItem] = useState("");

    // Helper function
    function handleSubmit(e) {
		e.preventDefault();
        if (newItem ==="") return; 
        props.onSubmit(newItem);
		setNewItem("");
	}

    // Return jsx
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item"> New Item </label>
                <input
                    type="text"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    name="item"
                    id="item"
                />
            </div>
            <button className="btn"> Add </button>
        </form>
    );
}