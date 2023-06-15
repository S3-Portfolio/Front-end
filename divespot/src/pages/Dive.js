
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dive = () => {
  const [dives, setDives] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDives, setFilteredDives] = useState([]);

  useEffect(() => {
    const apiUrl = `https://localhost:7033/api/Dive`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDives(data);
        setFilteredDives(data);
      });
  }, []);

  useEffect(() => {
    const results = dives.filter((dive) =>
      dive.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDives(results);
  }, [searchTerm, dives]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        height: '100vh'
      }}
    >
      <div id='searchbarContainer'>
        <input
          id='searchbar'
          type="text"
          placeholder="Search dives"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Dive name</th>
            <th scope="col">Depth</th>
            <th scope="col">Duration</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
          {filteredDives.map((dive) => (
            <Link to={{ pathname: `/DiveInfo/${dive.id}`, search: `?id=${dive.id}` }}>
              <tr>
                <th scope="row">{dive.id}</th>
                <td>{dive.name}</td>
                <td>{dive.depth}</td>
                <td>{dive.duration}</td>
                <td>100</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dive;