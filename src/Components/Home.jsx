import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="star-decoration top-left"></div>
        <div className="star-decoration top-right"></div>
        <div className="baby-illustration">
          <img
            src="/images/baby.png"
            alt="Baby with teddy bear"
            className="baby-img"
          />
        </div>
        <h1 className="main-title">The Journey</h1>
      </div>

      <div className="milestones-container">
        <div className="milestone-item">
          <div className="milestone-icon teddy-icon"></div>
          <div className="milestone-content">
            <h2 className="milestone-title">First Steps</h2>
            <p className="milestone-description">
              Taking those first wobbly steps across the room
            </p>
          </div>
        </div>

        <div className="milestone-item">
          <div className="milestone-icon rattle-icon"></div>
          <div className="milestone-content">
            <h2 className="milestone-title">First Word</h2>
            <p className="milestone-description">
              Capturing the sweet sound of the first word spoken
            </p>
          </div>
        </div>

        <div className="milestone-item">
          <div className="milestone-icon cake-icon"></div>
          <div className="milestone-content">
            <h2 className="milestone-title">First Birthday</h2>
            <p className="milestone-description">
              Walking steadily for the very first time
            </p>
          </div>
        </div>
      </div>
      <div className="star-decoration bottom-right"></div>
      <div className="star-decoration bottom-left"></div>
      <div className="star-decoration middle-right"></div>
    </div>
  );
};

export default Home;
