import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Navbar,About} from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Kits from './components/Kits/Kits';

function App() {
  const ramen = {
    
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/popups" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
