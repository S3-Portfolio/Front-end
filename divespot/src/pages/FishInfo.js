
import React from 'react';
import image from './Fish.jpg';
import './Fish.css';
  
const FishInfo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'Center',
        //alignItems: 'Right',
        height: '100vh'
      }}
    >

      <div id='fishcard'>
  <div class="card">
    <img class="card-img-top" src={image} alt="Card image cap"/>
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
};
  
export default FishInfo;