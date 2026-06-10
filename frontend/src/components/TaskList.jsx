function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  updateTask
}) {

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        No tasks found.
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}