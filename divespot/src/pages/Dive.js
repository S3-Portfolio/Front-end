
import React, {useState,useEffect} from 'react';
  
const Dive = () => {
  const [dives, setDives] = useState([]);
  async function logJSONData() {
    const response = await fetch("https://localhost:7033/api/Dive");
    const jsonData = await response.json();
    setDives(jsonData);
    console.log(jsonData);
  }
  useEffect(() => {
    const apiUrl = `https://localhost:7033/api/Dive`;
  
    fetch(apiUrl)
    
    .then((response) => response.json())
    
     .then((data) => setDives(data));
    }, [])

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
            <th scope="col">Depth</th>
            <th scope="col">Duration</th>
            <th scope="col">Likes</th>
          </tr>
        </thead>
        <tbody>
        {dives.map((Dive) => (
          <a href="http://localhost:3000/DiveInfo">
          <tr>
            <th scope="row">{Dive.id}</th>
            <td>{Dive.name}</td>
            <td>{Dive.depth}</td>
            <td>{Dive.duration}</td>
            <td>100</td>
          </tr></a>
        ))}
        </tbody>
      </table>
    </div>
  );
};
  
export default Dive;