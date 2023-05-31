

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DiveInfo = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [dive, setDive] = useState(null);
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const api = async () => {

      const diveJSON = await fetch(`https://localhost:7033/api/Dive/` + id);
      const dive = await diveJSON.json();
      setDive(dive);

      console.table(dive)

      const fishesJSON = await fetch(`https://localhost:7033/api/Fish/Fish/Water/` + dive.waterId);
      const fishes = await fishesJSON.json();
      setFishes(fishes);
    };

    api();

  }, [id]);

  if (!dive) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        height: '100vh'
      }}
    >
      <h1>Name: {dive.name}</h1>
      <h3>Depth: {dive.depth}</h3>
      <h3>Duration: {dive.duration}</h3>
      <h3>Likes: 100</h3>
      <p>Lorem ipsum dolor sit amet. </p>
      <p>Cum perferendis reiciendis et soluta praesentium ex deleniti blanditiis et corporis ipsam? </p>
      <p>Qui consequatur officia ut molestiae autem est inventore ducimus ut dolores dicta sed alias quaerat non voluptas consectetur vel libero incidunt.</p>

      <div id='fishcard'>
        {fishes.map((Fish) => (
          <div class="card">
            <Link to={{ pathname: `/FishInfo/${Fish.id}`, search: `?id=${Fish.id}` }}>
              <img class="card-img-top" src={Fish.img} alt="Card image cap" />
            </Link>
            <div class="card-body">
              <p class="card-text">{Fish.name}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DiveInfo;