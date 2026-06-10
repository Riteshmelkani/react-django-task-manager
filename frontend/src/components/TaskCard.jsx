function TaskCard({ task, deleteTask, toggleTask }) {

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="task-card">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task)}
      />

      <h3 className={task.completed ? "completed" : ""}>
        {task.title}
      </h3>

      <p>{task.description}</p>

      <div className="task-actions">
        <button>Edit</button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;