import React from 'react';


function Dropdown({ options }) {
  return (
    <select className="dropdown">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
