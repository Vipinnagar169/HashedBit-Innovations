import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    const newTasks = [...tasks, task.trim()];
    newTasks.sort();
    setTasks(newTasks);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>📝 To Do List</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px 12px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#fff",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{item}</span>
            <button onClick={() => handleDeleteTask(index)} style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px", cursor: "pointer" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
