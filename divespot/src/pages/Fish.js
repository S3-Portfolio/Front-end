
import React, { useState, useEffect } from 'react';
import './Fish.css';
import { Link } from 'react-router-dom';

const Fish = () => {
  const [fishes, setFishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFishes, setFilteredFishes] = useState([]);

  useEffect(() => {
    const apiUrl = `https://localhost:7033/api/Fish`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFishes(data);
        setFilteredFishes(data);
      });
  }, []);

  useEffect(() => {
    const results = fishes.filter((fish) =>
      fish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFishes(results);
  }, [searchTerm, fishes]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '100vh',
      }}
    >
      <div id='searchbarContainer'>
        <input
          id='searchbar'
          type="text"
          placeholder="Search fishes"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div id='fishcard'>
        {filteredFishes.map((fish) => (
          <div class="card">
            <Link to={{ pathname: `/FishInfo/${fish.id}`, search: `?id=${fish.id}` }}>
              <img class="card-img-top" src={fish.img} alt="Card image cap" />
            </Link>
            <div class="card-body">
              <p class="card-text">{fish.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fish;