import React from "react";

function Filter({ search, onSearchChange }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Use the 'search' prop here
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Filter;
