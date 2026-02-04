import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          "slug": slug.current,
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

            {/* LINK TO CATEGORY PAGE */}
            <Link
              to={`/products/${cat.slug}`}
              className="category-title"
            >
              {cat.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
