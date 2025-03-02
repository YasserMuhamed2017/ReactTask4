import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <ul className="list-group d-flex align-items-center">
      {tasks.map((task) => (
        <li key={task.id} className="w-50 list-group-item d-flex justify-content-between mb-3 border rounded">
          <Link to={`/todo/${task.id}`} className="text-primary text-decoration-none">
            {task.title}
          </Link>
          <div>
            <button onClick={() => toggleTaskStatus(task.id)} className="btn btn-warning mx-2">
              {task.status}
            </button>
            <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
