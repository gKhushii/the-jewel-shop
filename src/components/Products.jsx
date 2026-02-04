import { useEffect, useState } from "react";
import client from "../sanityClient";

export default function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "category" && visible == true] | order(order asc) {
          _id,
          title,
          "products": *[
            _type == "product" &&
            category._ref == ^._id &&
            visible == true
          ]{
            _id,
            title,
            price,
            description,
            image{
              asset->{url}
            }
          }
        }
      `)
      .then((data) => {
        console.log("CATEGORIES FROM SANITY:", data);
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="products" className="products">
      <h2>Our Collection</h2>

      {categories.length === 0 && (
        <p>No products available.</p>
      )}

      {categories.map((category) => (
        <div key={category._id} className="category">
          <h3>{category.title}</h3>

          <div className="product-grid">
            {category.products.map((product) => (
              <div key={product._id} className="product-card">
                {product.image?.asset?.url && (
                  <img
                    src={product.image.asset.url}
                    alt={product.title}
                  />
                )}

                <h4>{product.title}</h4>
                <p>{product.description}</p>

                {product.price && (
                  <strong>₹{product.price}</strong>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
