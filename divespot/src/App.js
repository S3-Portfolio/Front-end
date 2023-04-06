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
        <Route path='/' exact component={Home} />
        <Route path='/Dive' component={Dive} />
        <Route path='/Fish' component={Fish} />

        <Route path='/About' component={About} />
        
      </Routes>
    </Router>
  );
}
  
export default App;