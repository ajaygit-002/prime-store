import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  /* ===============================
     GET USER FROM sessionStorage
  =============================== */
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ===============================
     SEARCH
  =============================== */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching:", searchQuery);
    }
  };

  /* ===============================
     LOGIN
  =============================== */
  const handleLoginClick = () => {
    navigate("/login");
  };

  /* ===============================
     LOGOUT
  =============================== */
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-wrapper">

        {/* ===== LOGO ===== */}
        <Link to="/" className="logo">
          🛒 Prime Store
        </Link>

        {/* ===== SEARCH BAR ===== */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>

        {/* ===== ACTIONS ===== */}
        <div className="header-actions">

          {/* ===== LOGIN OR USER ===== */}
          {user ? (
            <>
              <button className="user-btn">
                👤 {user.name}
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="login-btn"
              onClick={handleLoginClick}
            >
              👤 Login
            </button>
          )}

          {/* ===== CART ===== */}
          <Link to="/cart" className="cart-btn">
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
