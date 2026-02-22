import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-section">
          <h2 className="logo">🎬 MovieZone</h2>
          <p>
            Your ultimate destination for Movies, Books & Online Classes.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bollywood">Bollywood</Link></li>
            <li><Link to="/hollywood">Hollywood</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MovieZone | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;