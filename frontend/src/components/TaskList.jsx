import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;