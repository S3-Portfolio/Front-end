import React from 'react';
import Navbar from './components/nav/Navbar';
import './Home.css';

function DiveInfo() {
  return (
    <div className="App">
      <header>
        <h2>DiveSpot</h2>
      </header>

      <Navbar/>

      <h1>Dive name</h1>
<h3>Location</h3>
<h3>Company</h3>
<h3>Likes</h3>
<p>Lorem ipsum dolor sit amet. </p>
<p>Cum perferendis reiciendis et soluta praesentium ex deleniti blanditiis et corporis ipsam? </p>
<p>Qui consequatur officia ut molestiae autem est inventore ducimus ut dolores dicta sed alias quaerat non voluptas consectetur vel libero incidunt.</p>
    </div>
  );
}

export default DiveInfo;