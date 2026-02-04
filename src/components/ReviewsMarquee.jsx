import React from "react";
import "./ReviewsMarquee.css";

const reviews = [
  {
    name: "Anjani Tyagi",
    date: "Nov 17, 2024",
    rating: 5,
    text:
      "Sincere & hard working team. very good work. my work done by Garima... her work jut wow!!!! Enjoyed working with her.....",
  },
  {
    name: "Rahul Mehta",
    date: "Oct 02, 2024",
    rating: 5,
    text:
      "Beautiful designs and excellent quality. Delivery was quick and packaging was premium.",
  },
  {
    name: "Priya Sharma",
    date: "Sep 14, 2024",
    rating: 4,
    text:
      "Loved the craftsmanship. Looks even better in real life!",
  },
];

export default function ReviewsMarquee() {
  return (
    <section className="reviews-section">
      <div className="reviews-track">
        {[...reviews, ...reviews].map((r, i) => (
          <div className="review-card" key={i}>
            
            {/* Header */}
            <div className="review-header">
              <div className="avatar">
                {r.name.charAt(0)}
              </div>

              <div className="review-meta">
                <strong>{r.name}</strong>
                <span className="date">{r.date}</span>
              </div>

              <img
                className="google-icon"
                src="/google.png"
                alt="Google"
              />
            </div>

            {/* Stars */}
            <div className="stars">
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>

            {/* Text */}
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
