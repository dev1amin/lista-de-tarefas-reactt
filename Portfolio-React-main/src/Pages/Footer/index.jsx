import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="social-icons">
          <a href="https://github.com/dev1amin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/amin.zorkot" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:aminayad56@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/amin-morais-500614230/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </div>
        <p>Made by aamin :))</p>
      </div>
    </footer>
  );
}

export default Footer;
