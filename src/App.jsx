import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoDetails from "./Components/TodoDetails"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: Date.now(), status: "In Progress" }, 
    ]);
  };

  const deleteTask = (idToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToRemove));
  };

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Completed" ? "In Progress" : "Completed" }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => (filter === "All" ? true : task.status === filter));

  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Todo App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoForm addTask={addTask} />
                <div className="d-flex justify-content-center my-3">
                  <button className="btn btn-outline-primary mx-2" onClick={() => setFilter("All")}>
                    All
                  </button>
                  <button className="btn btn-outline-warning mx-2" onClick={() => setFilter("In Progress")}>
                    In Progress
                  </button>
                  <button className="btn btn-outline-success mx-2" onClick={() => setFilter("Completed")}>
                    Completed
                  </button>
                </div>
                <TodoList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
              </>
            }
          />

          <Route path="/todo/:id" element={<TodoDetails tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
