import React from 'react';
import Navbar from './components/nav/Navbar';
import './Home.css';
import image from './WorldMap.PNG';

function Home() {
  return (
    <div className="App">
      <header>
        <h2>DiveSpot</h2>
      </header>

      <Navbar/>

      <img src={image} class="img-fluid" alt="Responsive image"/>
    </div>
  );
}

export default Home;
