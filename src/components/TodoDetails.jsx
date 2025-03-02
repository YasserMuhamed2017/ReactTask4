import React from "react";
import { useParams, Link } from "react-router-dom";

const TodoDetails = ({ tasks }) => {
  const { id } = useParams(); 
  const task = tasks.find((t) => t.id === parseInt(id)); 

  if (!task) {
    return <h2 className="text-center">Task not found!</h2>;
  }

  return (
    <div className="container text-center mt-5">
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <Link to="/" className="btn btn-primary mt-3">Back to List</Link>
    </div>
  );
};

export default TodoDetails;
