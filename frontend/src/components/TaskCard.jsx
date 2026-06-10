function TaskCard() {
  return (
    <div className="task-card">
      <h3>Learn React</h3>

      <p>Build task manager frontend</p>

      <div className="task-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;