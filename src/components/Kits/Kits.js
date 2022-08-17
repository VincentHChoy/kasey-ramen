import "./Kits.css";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

function Kits(props) {
  const [kit, setKit] = useState("");
  // useEffect(() => {
  //   const getPostsFromFirebase = [];
  //   const subs = db.collection("kits").onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       getPostsFromFirebase.push({ 
  //         ...doc.data(), 
  //         key: doc.id });
  //     });
  //   });
  //   setKit(getPostsFromFirebase)
  // },[]);

  useEffect(() => {
    const docRef = doc(db, "kits", "KWYM7uDSDNQ9hcfc8t3g");
    const docSnap = getDoc(docRef).then((res)=>{
      setKit(res.data())
    });
  }, []);

  console.log("kit outside",kit);
  
  return (
    <main className="kit-container">
      <h1>This week's Ramen</h1>
      <section className="desktop">
        <div>
          <h1 className="ramen-title">{/* {kit.name} */}</h1>
          <img
            // src={kit.image}
            alt="picture of yummy ramen"
          />
        </div>
        <div className="order">
          <div className="quantity">
            <label>Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              placeholder="1"
            />
          </div>
          <form
            type="number"
            id="quantity"
            name="quantity"
            value={1}
            min={1}
            action="/orders"
          >
            <Button desc={"ORDER"} />
          </form>
          <ul className="ingredients">
            {/* {ingredients} */}
            <br />
            <li>contains: fish, pork, gluten, sake, mushrooms, eggs</li>
            <br />
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Kits;
