import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Squidfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://github.com/VictorSquidWei" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/haoxiang-wei-b28317217/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://www.instagram.com/vik_weiii/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
      </div>
    </header>
  );
}

export default Header;
