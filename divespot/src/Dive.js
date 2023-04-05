import React from 'react';
import Navbar from './components/nav/Navbar';
import './Home.css';

function Dive() {
  return (
    <div className="App">
      <header>
        <h2>DiveSpot</h2>
      </header>

      <Navbar/>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Dive name</th>
            <th scope="col">Location</th>
            <th scope="col">Company</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="window.location='./DiveInfo'">
            <th scope="row">1</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr>
          <tr onclick="window.location='./DiveInfo'">
            <th scope="row">2</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr>
          <tr onclick="window.location='./DiveInfo'">
            <th scope="row">3</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr>
          <tr onclick="window.location='./DiveInfo'">
            <th scope="row">4</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr>
          <tr onclick="window.location='./DiveInfo'">
            <th scope="row">5</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dive;