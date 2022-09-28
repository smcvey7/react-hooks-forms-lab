import React from "react";

function Filter({onSearchChange, onCategoryChange, search, selectedCategory}) {

  return (
    <div className="Filter">
      <input type="text" onChange={onSearchChange} name={"search"} value={search}  placeholder={"Search"} />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
