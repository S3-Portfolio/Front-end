
import React from 'react';
  
const Dive = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        //alignItems: 'Right',
        height: '100vh'
      }}
    >
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
        <a href="http://localhost:3000/DiveInfo">
          <tr onclick="window.location='http://localhost:3000/DiveInfo'">
            <th scope="row">1</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr></a>
          <a href="http://localhost:3000/DiveInfo">
          <tr onclick="window.location='http://localhost:3000/DiveInfo'">
            <th scope="row">2</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr></a>
          <a href="http://localhost:3000/DiveInfo">
          <tr onclick="window.location='http://localhost:3000/DiveInfo'">
            <th scope="row">3</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr></a>
          <a href="http://localhost:3000/DiveInfo">
          <tr onclick="window.location='http://localhost:3000/DiveInfo'">
            <th scope="row">4</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr></a>
          <a href="http://localhost:3000/DiveInfo">
          <tr onclick="window.location='http://localhost:3000/DiveInfo'">
            <th scope="row">5</th>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
            <td>100</td>
          </tr></a>
        </tbody>
      </table>
    </div>
  );
};
  
export default Dive;