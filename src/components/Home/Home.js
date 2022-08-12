import React from "react";
import "./Home.css";
import Button from "../Button/Button";

function Home() {
  return (
    <div className="home">
      <img src="ramen.jpg" alt="ramen" />
      <section className="button-container">
        <Button desc={"RAMEN OF THE WEEK"} />
        <Button desc={"POPUPS"} />
      </section>
    </div>
  );
}

export default Home;
