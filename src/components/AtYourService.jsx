import React from "react";
import "./AtYourService.css";

export default function AtYourService() {
  return (
    <section className="service-strip">
      <h2 className="service-heading">AT YOUR SERVICE</h2>

      <div className="service-items">
        {/* 2 */}
        <div className="service-item">
          <IconBookmark />
          <a href="#">Complimentary Overnight Shipping</a>
        </div>

        {/* 3 */}
        <div className="service-item">
          <IconReturn />
          <a href="#">Free Returns Within 30 Days</a>
        </div>

        {/* 4 */}
        <div className="service-item">
          <IconStore />
          <a href="#">Place order through Whatsapp or Instagram</a>
        </div>

        {/* 5 */}
        <div className="service-item">
          <IconGift />
          <a href="#">Complimentary Gift Boxes</a>
        </div>

        {/* 6 */}
        <div className="service-item">
          <IconCard />
          <a href="#">Gift Cards for Any Occasion</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SVG ICONS ---------- */

const IconBookmark = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);

const IconReturn = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 4l-5 5 5 5" />
    <path d="M4 9h9a5 5 0 010 10h-1" />
  </svg>
);

const IconStore = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 9l2-5h14l2 5" />
    <path d="M5 9v12h14V9" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const IconGift = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 9h18v12H3z" />
    <path d="M12 9v12" />
    <path d="M12 3c-1.5 0-3 1.5-3 3h6c0-1.5-1.5-3-3-3z" />
  </svg>
);

const IconCard = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M2 10h20" />
  </svg>
);
