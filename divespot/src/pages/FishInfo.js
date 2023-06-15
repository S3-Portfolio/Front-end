
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import image from './Fish.jpg';
import './Fish.css';



const FishInfo = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [fish, setFish] = useState(null);

  useEffect(() => {
    const api = async () => {

      const fishJSON = await fetch(`https://localhost:7033/api/Fish/` + id);
      const fish = await fishJSON.json();
      setFish(fish);

      console.table(fish)

      //const fishesJSON = await fetch(`https://localhost:7033/api/Fish/Fish/Water/` + dive.waterId);
      //const fishes = await fishesJSON.json();
      //setFishes(fishes);
    };

    api();

  }, [id]);

  if (!fish) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '100vh' }}>
      <div id='fishcard'>
        <div className='card'>
          <img className='card-img-top' src={fish.img} alt='Fish' />
          <div className='card-body'>
            <p className='card-text'>{fish.name}</p>
          </div>
        </div>

        <h1>{fish.sName}</h1>

        <h2>{fish.depth}</h2>
        <p>Lorem ipsum dolor sit amet. </p>
        <p>
          Cum perferendis reiciendis et soluta praesentium ex deleniti blanditiis et corporis ipsam?{' '}
        </p>
        <p>
          Qui consequatur officia ut molestiae autem est inventore ducimus ut dolores dicta sed alias
          quaerat non voluptas consectetur vel libero incidunt.
        </p>
      </div>
    </div>
  );
};

export default FishInfo;