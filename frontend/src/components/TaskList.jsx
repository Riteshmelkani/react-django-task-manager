import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleTask, updateTask}) {
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

export default TaskList;