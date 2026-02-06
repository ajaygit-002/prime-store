import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h4 className="footer-title">About Prime Store</h4>
          <p className="footer-text">
            Prime Store is your one-stop destination for affordable prices,
            genuine products, fast delivery, and 24/7 customer support.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4 className="footer-title">Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Shipping Info</Link></li>
            <li><Link to="/contact">Returns</Link></li>
            <li><Link to="/contact">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 Prime Store | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
