import React, { useState } from 'react';
import './Searchbar.css'; // Import CSS file for styling
import SearchIcon from '@mui/icons-material/Search';
// import { Icon } from '@mui/material';


function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState([
    'apple', 'banana', 'mango', 'milk', 'bread'
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (selectedItem) => {
    setSearchList(selectedItem)
    // Handle search logic here
    console.log('Search input:', inputValue);
  };

  const filteredList = searchList.filter(item =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="search-container">
      <div style={{display:"flex"}}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      {inputValue && (
        <ul className="search-list">
          {filteredList.map((item, index) => (
            <li key={index}  onClick={() => handleSearch(item)}>{item}</li>
          ))}
        </ul>
      )}
      <button type="button" onClick={handleSearch} 
      className="search-button" 
      style={{display:"flex",alignItems:"center"}} >
        <SearchIcon />
          Search 
      </button>
      </div>
    </div>
  );
}

export default Searchbar;
