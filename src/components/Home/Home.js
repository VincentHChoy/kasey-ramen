import React from "react";
import "./Home.css";
import Button from "../Button/Button";

function Home() {
  return (
    <div className="home">
      <img src="ramen.jpg" alt="ramen" />
      <section className="button-container">
        <p>hand-crafted ramen with community in mind.</p>
        <p>kasey ramen is not a restaurant but a project for friends and family to enjoy.</p>
        <Button desc={"RAMEN OF THE WEEK"} />
        <Button desc={"POPUPS"} />
      </section>
    </div>
  );
}

export default Home;
