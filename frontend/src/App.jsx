import { useEffect, useState } from "react";
import API from "./services/api";

import "./App.css";

import TaskForm from "./components/TaskForm";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";


function App() {
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

  const addTask = async (taskData) => {
    try {
      await API.post("/tasks/", taskData);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Task Manager</h1>

      <div className="top-section">
        <TaskForm addTask={addTask}/>
        <Stats />
      </div>

      <SearchBar />

      <FilterBar />

      <TaskList tasks={tasks}  deleteTask={deleteTask}/>
    </div>
  );
}

export default App;