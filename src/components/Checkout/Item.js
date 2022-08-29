import "./Item.css";

import React from "react";

function Item(props) {
  return (
    <div className="row">
      {props.img && 
      <img className="cart-img" src={props.img}/>}
      <li className="">{props.info}</li>
    </div>
  );
}

export default Item;
