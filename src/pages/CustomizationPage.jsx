import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import "./CustomizationPage.css";
import AtYourService from "../components/AtYourService";
import Footer from "../components/Footer";

export default function CustomizationPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[
          _type == "product" &&
          visible == true &&
          category->slug.current == "customized"
        ]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url,
          "hoverImageUrl": hoverImage.asset->url
        }
      `)
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <section className="customization-page">
      {/* 🔹 Banner */}
      <div className="customization-banner">
        <img
          src="/customize_banner.png"
          alt="Customization"
        />
      </div>

      {/* 🔹 Products */}
      <div className="products-grid">
        {products.map((p) => (
          <div
            key={p._id}
            className={`productt-card ${p.hoverImageUrl ? "has-hover" : ""}`}
          >
            <div className="product-image-wrap">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="product-img primary"
              />

              {p.hoverImageUrl && (
                <img
                  src={p.hoverImageUrl}
                  alt={p.title}
                  className="product-img hover"
                />
              )}
            </div>
<div className="title-grid">
            <h4>{p.title}</h4>
            <p>${p.price}</p></div>
          </div>
        ))}
      </div>
      <AtYourService/>
    <Footer/>
    </section>
    
  );
}
