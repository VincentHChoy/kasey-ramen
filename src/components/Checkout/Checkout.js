import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import Item from "./Item";
import PaypalButton from "./PaypalButton";

function Checkout(props) {
  console.log("props", props);
  const location = useLocation();
  const quantity = location.state?.quantity;
  const cost = quantity * 18;
  const kit = location.state?.kit;
  console.log("kit", location.state?.kit);

  return (
    <div className="card">
      <div className="top" />
      {kit && (
        <section className="item">
          <h1>Your Order:</h1>
          <ul className="checkout-categories">
            <ul>
              <h1>Product</h1>
              <Item info={kit.name} img={kit.image} />
            </ul>
            <ul>
              <h1>Price</h1>
              <Item info={"18.00"} />
            </ul>
            <ul>
              <h1>Quantity</h1>
              <Item info={"1"} />
            </ul>
          </ul>
          <h1>Subtotal: {cost}.00 CAD</h1>
        </section>
      )}
      {true && <PaypalButton amount={cost} />}
    </div>
  );
}

export default Checkout;
