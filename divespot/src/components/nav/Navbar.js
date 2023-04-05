import React from 'react';
import './Navbar.css';
//https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
function nav() {
  return (
    <div className="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="./Home">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Dive">Dives</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Fish">Fish</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./About">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default nav;