import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Kits from "./components/Kits/Kits";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={""} />
        <Route path="/kits" 
        element={
        <Kits 
        />
        } />
        <Route path="/popups" element={""} />
      </Routes>
    </div>
  );
}

export default App;
