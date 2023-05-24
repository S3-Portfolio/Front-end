
import React, {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import image from './Fish.jpg';
import './Fish.css';



const FishInfo = () => {

const { state } = useLocation() // state.id is id

  const [fishes, setFishes] = useState([]);
  async function logJSONData() {
    const response = await fetch("https://localhost:7033/api/Fish/" + state.id);
    const jsonData = await response.json();
    setFishes(jsonData);
    console.log(jsonData);
  }
  useEffect(() => {
    const apiUrl = `https://localhost:7033/api/Fish/` + state.id;
  
    fetch(apiUrl)
    
    .then((response) => response.json())
    
     .then((data) => setFishes(data));
    }, [])

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
{fishes.map((Fish) => (
            <><div class="card">
    <img class="card-img-top" src={Fish.img} alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">{Fish.name}</p>
    </div>
  </div>
  <h1>{Fish.sName}</h1>
<h2>{Fish.depth}</h2>
  <p>Lorem ipsum dolor sit amet. </p>
  <p>Cum perferendis reiciendis et soluta praesentium ex deleniti blanditiis et corporis ipsam? </p>
  <p>Qui consequatur officia ut molestiae autem est inventore ducimus ut dolores dicta sed alias quaerat non voluptas consectetur vel libero incidunt.</p></>
        ))}
        </div>
      </div>
  );
};
  
export default FishInfo;