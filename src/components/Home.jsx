import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <span className="hero-eyebrow">ART OF LOVE</span>

        <h1 className="hero-title">
          SIMPLY TIMELESS<br/> GIFTING
        </h1>

        <p className="hero-subtext">
          Celebrate love with timeless jewels, crafted to be treasured for generations.
        </p>

        <div className="hero-actions">
          <button className="hero-btn secondary">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
