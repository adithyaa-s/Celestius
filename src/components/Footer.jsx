import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© 2024 Celestius. All rights reserved.</p>
      <div className="social-links">
        <a href="http://www.linkedin.com/in/club-celestius-24b1a6326" target='_blank'>
          LinkedIn
        </a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://www.instagram.com/celestius.cit?igsh=bWhpMXJvZ2txazV5" target='_blank'>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
