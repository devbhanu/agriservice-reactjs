import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
// Import Axios or any other library for making HTTP requests
import ShareableCard from './ShareableCard';

function Dynamic() {
  const [data, setData] = useState([]);

  const [max, setMax] = useState(10); // Initial value 10

  const handleMaxChange = (event) => {
    setMax(parseInt(event.target.value)); // Use parseInt to convert string to number
  };

 
  useEffect(() => {
    // Fetch data from API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data); // Assuming response.data is an array of objects
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    <select value={max} onChange={handleMaxChange}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
    </select>
    <div style={{width:'60vw', display: 'grid',float:'right' }}>
        
      {data.slice(0, max).map((item, index) => (
        <ShareableCard key={index} shareContent={item}  />
      ))}
      </div>
    </div>
  );
}

export default Dynamic;
