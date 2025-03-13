import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Hello, I'm <span>John Doe</span></h1>
      <p>Technology Innovator | Product Developer | System Architect</p>
      <img id="profile-picture" src="assets/JohnDoe.avif" alt="John Doe" />
      <a href="#contact" className="btn">Contact Me</a>
    </header>
  );
};

export default Header;
