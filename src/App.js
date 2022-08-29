import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Kits from "./components/Kits/Kits";
import Loading from "./components/Loading/Loading";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  />
        <Route path="/kits" element={<Kits />} />
        <Route path="/popups" element={<Loading/>}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
