import "./Kits.css";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

import {
  doc,
  getDoc,
} from "firebase/firestore";

function Kits() {
  const [kit, setKit] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const docRef = doc(db, "kits/17-07-2022/ramen", "sNrdhz8aiber8iRopQKO");
    setTimeout(() => {
      getDoc(docRef)
        .then((res) => {
          setKit(res.data());
        })
        .then(() => {
          console.log("all done");
        });
    }, 1000);
  }, []);


  const ingredients = kit && kit.ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  const contains = kit && kit.contains.join(", ");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const pickupDate = kit && kit.pickupDate
    .toDate()
    .toLocaleDateString("en-us", options);

  // const orderRef = db.collection("kits");

  const saveOrder = async (event) => {
    event.preventDefault();
    console.log("saving order");

    await db.collection("kits/17-07-2022/orders").add({
      text: "hello world",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <main className="kit-container">
      {!kit && <Loading />}
      {kit && (
        <section className="desktop">
          <div className="center">
            <h1>This week's Ramen</h1>
            <h1 className="ramen-title">{kit.name}</h1>
            <img src={kit.image} alt="picture of yummy ramen" />
          </div>
          <div className="order">
            <h3>Quantity</h3>
            <div className="quantity">
              <form
                id="quantity"
                name="quantity"
                value={1}
                min={1}
                onSubmit={saveOrder}
              >
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="5"
                  placeholder="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Link to="/checkout" state={{quantity:quantity, kit:kit}}>
                  <Button type={"submit"} desc={"Order"} />
                </Link>
              </form>
            </div>
            <ul className="ingredients">
              {ingredients}
              <br />
              <li>contains: {contains}</li>
              <br />
              <li>pickup: {pickupDate}</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export default Kits;
