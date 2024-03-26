import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>© 2024 Victor Wei. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/VictorSquidWei" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/haoxiang-wei-b28317217/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        <a href="https://www.instagram.com/vik_weiii/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
      </div>
    </footer>
  );
}

export default Footer;