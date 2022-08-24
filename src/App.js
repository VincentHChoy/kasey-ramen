import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Kits from "./components/Kits/Kits";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "./components/Loading/Loading";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LYYhcLpayQlUUmPmhdDGRGeiLRyrxET8ccijqHKgl7jcvrtBfwz3Jotqa9uXcLSoUooVwEzTIY4Nu2fY9WOAqEs00Wb3GZFyK"
);

const options = {
  // passing the client secret obtained from the server
  clientSecret: process.env.STRIPE_SECRET_KEY,
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  />
        <Route path="/kits" element={<Kits />} />
        <Route path="/popups" element={<Loading/>}/>
        <Route path="/checkout" element={<Kits />} />
      </Routes>
    </div>
  );
}

export default App;
