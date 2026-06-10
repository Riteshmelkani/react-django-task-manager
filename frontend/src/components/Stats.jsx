function Stats({ tasks }) {

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="stats-card">
      <h2>Task Summary</h2>

      <div className="stat-box">
        <h3>{activeTasks}</h3>
        <p>Active</p>
      </div>

      <div className="stat-box">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default Stats;