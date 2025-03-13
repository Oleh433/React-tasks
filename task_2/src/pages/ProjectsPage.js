import React from 'react';
import './ProjectsPage.css'
import ProjectsHeader from '../components/ProjectsHeader';
import Project from '../components/Project';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsHeader />
      <div id="projects" className="projects-container">
        <h2>Notable Projects</h2>
        <Project
          title="Google Pixel"
          description="Contributed to the development of the Google Pixel phone, focusing on the user interface and seamless integration with Google services."
          imageUrl="assets/google-pixel.png"
          imageAlt="Google Pixel phone"
        />
        <Project
          title="VR Helmet"
          description="Worked on a state-of-the-art VR helmet, enhancing the immersive experience through innovative software and hardware integration."
          imageUrl="assets/vr-helmet.jpg"
          imageAlt="VR Helmet"
        />
        <Project
          title="Smart Home System"
          description="Developed a comprehensive smart home system that connects and controls various home devices for improved convenience and security."
          imageUrl="assets/smart-home.jpg"
          imageAlt="Smart Home System"
        />
        <Project
          title="Autonomous Vehicle Software"
          description="Led the software development team for an autonomous vehicle project, implementing advanced navigation and safety features."
          imageUrl="assets/autonomous-vehicle.webp"
          imageAlt="Autonomous Vehicle Software"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
