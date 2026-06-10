import "./App.css";

import TaskForm from "./components/TaskForm";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <h1 className="app-title">Task Manager</h1>

      <div className="top-section">
        <TaskForm />
        <Stats />
      </div>

      <SearchBar />

      <FilterBar />

      <TaskList />
    </div>
  );
}

export default App;