import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import "./CategorySection.css";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[
          _type == "category" &&
          visible == true &&
          showInNavigation == true
        ] | order(order asc) {
          _id,
          title,
          "imageUrl": image.asset->url
        }
      `)
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <section className="category-section">
      <h2 className="category-heading">SHOP BY CATEGORY</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat._id}>
            <div className="category-image">
              <img src={cat.imageUrl} alt={cat.title} />
            </div>

            <a href="#" className="category-title">
              {cat.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
