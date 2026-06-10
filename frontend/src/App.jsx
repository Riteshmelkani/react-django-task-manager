import { useEffect, useState } from "react";
import API from "./services/api";

import "./App.css";

import TaskForm from "./components/TaskForm";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
    useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks/");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}/`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTask = async (task) => {
    try {
      await API.put(`/tasks/${task.id}/`, {
        ...task,
        completed: !task.completed,
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await API.put(`/tasks/${updatedTask.id}/`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (taskData) => {
    try {
      await API.post("/tasks/", taskData);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title.toLowerCase().includes(
        searchTerm.toLowerCase()
      );

    if (filter === "active") {
      return !task.completed && matchesSearch;
    }

    if (filter === "completed") {
      return task.completed && matchesSearch;
    }

    return matchesSearch;
  });

  
  return (
    <div className="container">
      <h1 className="app-title">Task Manager</h1>

      <div className="top-section">
        <TaskForm addTask={addTask}/>
        <Stats tasks={tasks}/>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <FilterBar filter={filter} setFilter={setFilter}/>

      <TaskList tasks={filteredTasks}  deleteTask={deleteTask}  toggleTask={toggleTask} updateTask={updateTask}/>
    </div>
  );
}

export default App;