
import React from 'react';
import image from './WorldMap.PNG';
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        //alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to DiveSpot</h1>
      <img src={image} class="img-fluid" alt="Responsive image"></img>
    </div>
  );
};
  
export default Home;