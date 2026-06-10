function TaskForm() {
  return (
    <div className="task-form">
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
      />

      <textarea
        placeholder="Description"
      ></textarea>

      <input type="date" />

      <button>Add Task</button>
    </div>
  );
}

export default TaskForm;