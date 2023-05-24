
import React, {useState,useEffect} from 'react';
import image from './Fish.jpg';
import './Fish.css';
import { Link } from 'react-router-dom';

/*async function logJSONData() {
  const response = await fetch("https://localhost:7033/api/Fish");
  const jsonData = await response.json();
  setFishes(jsonData);
  console.log(jsonData);
}*/


  
const Fish = () => {
  const [fishes, setFishes] = useState([]);
  async function logJSONData() {
    const response = await fetch("https://localhost:7033/api/Fish");
    const jsonData = await response.json();
    setFishes(jsonData);
    console.log(jsonData);
  }
  useEffect(() => {
    const apiUrl = `https://localhost:7033/api/Fish`;
  
    fetch(apiUrl)
    
    .then((response) => response.json())
    
     .then((data) => setFishes(data));
    }, [])

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
        {fishes.map((Fish) => (
          <div class="card"> 
          <Link to={{ pathname: "/FishInfo", state: { id: Fish.id }}}>
          <img class="card-img-top" src={Fish.img} alt="Card image cap"/>
          </Link>
          <div class="card-body">
            <p class="card-text">{Fish.name}</p>
          </div>
        </div>
        ))}
  
</div>
    </div>
  );
};
  
export default Fish;