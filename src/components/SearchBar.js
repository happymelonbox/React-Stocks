import React from 'react';

const SearchBar = ({handleSort, handleFilter}) => {
  const selectSort = (event) => {
    const value = event.target.value
    handleSort(value)
  }
  const selectFilter = (event) => {
    const value = event.target.value
    handleFilter(value)
  }
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sortBy' checked={null} onChange={selectSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={selectSort} name='sortBy'/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={selectFilter}>
          <option value="All">All</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="Tech">Tech</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
