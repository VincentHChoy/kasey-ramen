import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Navbar,About} from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
