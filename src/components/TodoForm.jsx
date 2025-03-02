import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        // We use SPA, so we don't need to load page for another route.
        e.preventDefault();

        if (title.trim() !== "" && description.trim() !== "") {
            console.log(title, description);
            addTask({ title, description });
            setTitle("");
            setDescription("");
        }
    };
    return (
        <div className="w-100 flex-column d-flex justify-content-center align-items-center mt-5">
            <form onSubmit={handleSubmit} className="p-4 border rounded w-50">
                <label htmlFor="todo" className="col-form-label fs-5 fw-bold col-form-label">TODO APP</label>
                <div className="form-group">
                    <label htmlFor="Title">Title</label>
                    <input type="text" className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="Description">Description</label>
                    <textarea rows={6} className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </div>

    );
}

export default TodoForm