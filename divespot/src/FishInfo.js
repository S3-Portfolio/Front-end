import React from 'react';
import Navbar from './components/nav/Navbar';
import './Home.css';

function FishInfo() {
  return (
    <div className="App">
      <header>
        <h2>DiveSpot</h2>
      </header>

      <Navbar/>

      <div style="display: flex; flex-wrap: wrap;">
  <div class="card" style="width: 15rem;">
    <img class="card-img-top" src="" alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text">Fish name</p>
    </div>
  </div>
</div>
<h1>Scientific name fish</h1>
<p>Lorem ipsum dolor sit amet. </p>
<p>Cum perferendis reiciendis et soluta praesentium ex deleniti blanditiis et corporis ipsam? </p>
<p>Qui consequatur officia ut molestiae autem est inventore ducimus ut dolores dicta sed alias quaerat non voluptas consectetur vel libero incidunt.</p>
    </div>
  );
}

export default FishInfo;