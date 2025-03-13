import React from 'react';
import './styles/Project.css';

const Project = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="project">
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img src={imageUrl} alt={imageAlt} className="project-image" />
    </div>
  );
};

export default Project;
