import React, { useState } from 'react';

const SortOptions = ({ onSort }) => {
  const [sortType, setSortType] = useState('');

  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    setSortType(selectedSortType);
    onSort(selectedSortType);
  };

  return (
    <div className='sort'>
      <label>
        Sort by Company Name:
        <select value={sortType} onChange={handleSortChange}>
          <option value="">--Select--</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>
    </div>
  );
};

export default SortOptions;    