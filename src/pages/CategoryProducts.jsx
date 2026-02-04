import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sanityClient from "../sanityClient";
import "./CategoryProducts.css";
import Footer from "../components/Footer";

export default function CategoryProducts() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const activeCategory = categories.find((c) => c.slug === slug);

  /* Fetch categories */
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category" && visible == true && showInNavigation == true] | order(order asc) {
          _id,
          title,
          description,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          "headerImageUrl": headerImage.asset->url
        }
      `,
      )
      .then(setCategories)
      .catch(console.error);
  }, []);

  /* Fetch products */
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[
           _type == "product" &&
           visible == true &&
           category->showInNavigation == true &&
           category->slug.current == $slug
         ]| order(order asc){
           _id,
           title,
           price,
           "imageUrl": image.asset->url,
           "hoverImageUrl": hoverImage.asset->url
         }

      `,
        { slug },
      )
      .then(setProducts)
      .catch(console.error);
  }, [slug]);

  return (
    <section className="category-products">
      {/* 🔹 CATEGORY HEADER */}
      {activeCategory && (
        <div className="category-header">
          <div className="header-content">
            <h1>{activeCategory.title}</h1>
            <p>{activeCategory.description}</p>
          </div>
        </div>
      )}
      {/* 🔹 CATEGORY STRIP */}
      <div className="category-strip">
        {/* Customization */}
        <div
          className="customization-tile"
          onClick={() => navigate("/customizations")}
        >
          <img src="/customization.jpg" alt="Customization" />
          <span className="custom-title">CUSTOMIZATION</span>
        </div>

        {categories.map((cat) => (
          <div
            key={cat._id}
            className={`category-tile ${cat.slug === slug ? "active" : ""}`}
            onClick={() => navigate(`/products/${cat.slug}`)}
          >
            <div className="tile-image">
              <img src={cat.imageUrl} alt={cat.title} />

              {/* Overlay title */}
              <span className="tile-title">{cat.title.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
      {/* 🔹 PRODUCTS */}
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
      <Footer/>
    </section>
  );
}
