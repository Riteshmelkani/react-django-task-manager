import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const taskData = {
      title,
      description,
      due_date: dueDate || null,
      completed: false,
    };

    await addTask(taskData);

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;