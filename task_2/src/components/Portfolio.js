import React from 'react';
import './styles/Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
      <p>Check out some of my recent projects.</p>
      <Link to="/projects" className="btn">View Projects</Link>
    </section>
  );
};

export default Portfolio;
