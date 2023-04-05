import Navbar from './components/nav/Navbar';
import './Home.css';

function About() {
  return (
    <div className="App">
      <header>
        <h2>DiveSpot</h2>
      </header>

      <Navbar/>

      <h1>The website to search for dives and fish</h1>
<p>If you are searching for a specific fish or a nice diving location, than this is the place to be</p>
    </div>
  );
}

export default About;