import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./App.css";

const tooltips = [
  "No is not allowed 😜",
  "Oops! Try YES 💖",
  "Hehe, you can’t click me 😏",
  "Your heart knows the answer ❤️",
  "Don’t run from love 💕"
];

export default function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [tip, setTip] = useState(tooltips[0]);
  const [showCard, setShowCard] = useState(false);

  const moveNo = () => {
    const radius = 200; // 👈 bounded movement
    const x = Math.random() * radius * 2 - radius;
    const y = Math.random() * radius * 2 - radius;

    setOffset({ x, y });
    setTip(tooltips[Math.floor(Math.random() * tooltips.length)]);
  };

  return (
    <div className="layout">
      {/* <div className="layout"> */}
  <div className="hero-heart">❤️</div>


      {/* Floating background hearts */}
      <div className="float-layer">
  <span className="heart h1">❤️</span>
  <span className="heart h2">💖</span>
  <span className="heart h3">💕</span>
  <span className="heart h4">💗</span>

  <span className="balloon b1">🎈</span>
  <span className="balloon b2">🎈</span>
  <span className="balloon b3">🎈</span>
  
</div>

      <h1 className="main-title">Will you be my Valentine?</h1>
      <p className="sub-text">I promise love, laughter & forever 💝</p>

      <div className="button-zone">
        <button className="yes-btn" onClick={() => setShowCard(true)}>
          YES <FaHeart />
        </button>

        <div
          className="no-wrapper"
          onMouseEnter={moveNo}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <span className="tooltip">{tip}</span>
          <button className="no-btn">NO</button>
        </div>
      </div>

      <p className="corner-text left">Made with love ❤️</p>
      <p className="corner-text right">Only one answer 😉</p>

      {showCard && (
  <div className="overlay">
    <div className="valentine-modal">
      
      {/* Left Red Section */}
      <div className="val-left">
        <h4>HAPPY</h4>
        <h1>Valentine’s<br />Day</h1>

        <div className="date-box">VIJAYA SREE❤️</div>

        <p>
          You are the reason my heart smiles a little brighter every day.  
          Thank you for choosing love, choosing us, choosing *me* 💖
        </p>
        <span className="heart h1">❤️</span>
        <span className="heart h2">💖</span>
        <span className="heart h3">💕</span>
        <span className="heart h4">💗</span>

        <h2>Love You, As always!</h2>
      </div>

      {/* Right White Section */}
      <div className="val-right">
  

  <button
    className="close-btn"
    onClick={() => setShowCard(false)}
  >
    Forever Yours 💕
  </button>
  {/* <div className="hanging-hearts">
    <span>❤️</span>
    <span>❤️</span>
    <span>❤️</span>
  </div> */}
</div>


    </div>
  </div>
)}

    </div>
  );
}
