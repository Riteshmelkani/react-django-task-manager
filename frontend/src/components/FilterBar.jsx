function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        className="filter-btn"
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className="filter-btn"
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      <button
        className="filter-btn"
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;