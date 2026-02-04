import React, { useEffect, useRef, useState } from "react";
import sanityClient from "../sanityClient";
import "./ProductSlider.css";

export default function ProductSlider() {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[
          _type == "product" &&
          visible == true &&
          showInSlider == true
        ]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url
        }
      `)
      .then(setProducts)
      .catch(console.error);
  }, []);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth"
    });
  };

  return (
    <section className="product-slider">
      <button className="nav left" onClick={() => scroll("left")}>‹</button>

      <div className="slider-track" ref={sliderRef}>
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <div className="image-wrap">
              <img src={p.imageUrl} alt={p.title} />
            </div>

            <div className="title"><h4>{p.title}</h4></div>
            <p className="price">${p.price}</p>
          </div>
        ))}
      </div>

      <button className="nav right" onClick={() => scroll("right")}>›</button>
    </section>
  );
}
