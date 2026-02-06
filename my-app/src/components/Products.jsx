import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Products.css";

const Products = () => {
  const { addToCart, cartCount } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 4149,
      rating: 4.5,
      img: "https://static.vecteezy.com/system/resources/previews/055/027/242/non_2x/modern-white-wireless-headphones-free-png.png "
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 16599,
      rating: 4.7,
      img: "https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-apple-watch-series-png-image_13223399.png"
    },
    {
      id: 3,
      name: "USB-C Cable",
      price: 1079,
      rating: 4.3,
      img: "https://png.pngtree.com/png-clipart/20230101/original/pngtree-connector-realistic-cable-plug-for-devices-charging-and-connection-mobile-wire-png-image_8848454.png"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 2899,
      rating: 4.6,
      img: "https://img.freepik.com/premium-photo/laptop-stand-lightweight-plastic-portability-white-clear-surface-png-transparent-background_94628-32150.jpg?w=360"
    },
    {
      id: 5,
      name: "Phone Case",
      price: 1329,
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj2ei5P6Kqb1XKkt2yQ9tVLE8nxZK9mk6kw&s"
    },
    {
      id: 6,
      name: "Keyboard",
      price: 5809,
      rating: 4.8,
      img: "https://img.freepik.com/premium-photo/gaming-keyboard-with-backlight-isolated-white-background_666369-6.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="products">
      <div className="products-container">

        <div className="products-header">
          <h2>Featured Products</h2>
          <Link to="/cart" className="cart-badge">🛒 {cartCount}</Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">

              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />

              <h3>{product.name}</h3>

              <div className="rating">
                {"⭐".repeat(Math.floor(product.rating))}
                <span>{product.rating}</span>
              </div>

              <p className="price">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <button
                className="add-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
