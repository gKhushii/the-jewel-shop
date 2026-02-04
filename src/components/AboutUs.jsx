import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about">
      {/* Left content */}
      <div className="about-text">
        <h2 className="about-title">At The Jewel Shop</h2>

        <p>
          We craft timeless jewellery designed to celebrate love and life’s most precious moments. With a focus on quality, elegance and thoughtful design, each piece is created to be cherished forever.
        </p>

        
      </div>

      {/* Right image */}
      <div className="about-image">
        <img src="/about.jpg" alt="Mixed metal jewelry" />
      </div>
    </section>
  );
}
