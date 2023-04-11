import React from 'react';
import './App.css';
import Navbar from './components/nav/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About';
import Dive from './pages/Dive';
import Fish from './pages/Fish';
//import SignUp from './pages/signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element ={<Home/>}></Route>
        <Route path='/Dive' element ={<Dive/>}></Route>
        <Route path='/Fish' element ={<Fish/>}></Route>

        <Route path='/About' element ={<About/>}></Route>
        
      </Routes>
    </Router>
  );
}
  
export default App;