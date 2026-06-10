function TaskCard({ task, deleteTask, toggleTask, updateTask }) {

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }
  };

  const handleEdit = async () => {
    const newTitle = prompt("Edit title", task.title);

    if (newTitle === null) return;

    const newDescription = prompt(
      "Edit description",
      task.description
    );

    if (newDescription === null) return;

    const newDueDate = prompt(
      "Edit due date (YYYY-MM-DD)",
      task.due_date || ""
    );

    const updatedTask = {
      ...task,
      title: newTitle,
      description: newDescription,
      due_date: newDueDate,
    };

    updateTask(updatedTask);
  };

 

  return (
      <div   className={`task-card ${
        !task.completed &&
        task.due_date &&
        new Date(task.due_date) < new Date()
          ? "overdue"
          : ""
      }`}>
          
      <div classname="task-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task)}
        />

        <h3 className={task.completed ? "completed" : ""}>
          {task.title}
        </h3>
      </div>

      <p>{task.description}</p>

      {task.due_date && (
        <small>
          Due: {task.due_date}
        </small>
      )}

      <div className="task-actions">
        <button onClick={handleEdit}>Edit</button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;