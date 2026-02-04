import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sanityClient from "../sanityClient";
import "./CategoryPage.css";
import AtYourService from "../components/AtYourService";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(`
        *[
          _type == "category" &&
          visible == true && showInNavigation == true
        ] | order(order asc) {
          _id,
          title,
          description,
          "imageUrl": image.asset->url,
          "slug": slug.current
        }
      `)
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="category-page">
        {categories.map((cat, index) => (
          <div
            key={cat._id}
            className={`category-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="category-imagee">
              <img src={cat.imageUrl} alt={cat.title} />
            </div>

            <div className="category-content">
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
              <button
                className="category-btn"
                onClick={() => navigate(`/products/${cat.slug}`)}
              > 
                Explore
              </button>
            </div>
          </div>
        ))}
      </section>

      <AtYourService />
    </>
  );
}
