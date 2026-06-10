import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;