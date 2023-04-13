
import React from 'react';
import image from './Fish.jpg';
import './Fish.css';
import { Link } from 'react-router-dom';
  
const Fish = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        //justifyContent: 'Center',
        //alignItems: 'Right',
        height: '100vh',
      }}
    >
      <div id='fishcard'>
  <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
    <div class="card-body">
      <p class="card-text">Fish name</p>
    </div>
  </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
    <div class="card">
    <Link to="/FishInfo">
    <img class="card-img-top" src={image} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <p class="card-text">Fish name</p>
      </div>
    </div>
</div>
    </div>
  );
};
  
export default Fish;