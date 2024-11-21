// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectLinks = [
    {
      id: 1,
      title: "1. Introduction to AWS Projects",
      description: "Learn about some introductory AWS projects you can try out. These projects are beginner friendly and don't cost any money to start. You'll learn about concepts like Kubernetes in Docker (KIND), Ubuntu Server Monitoring, Terraform Infrastructure as Code (IaC).",
      link: "/project-details/1"
    },
    {
      id: 2,
      title: "2. Low Noise Amplifier",
      description: "Learn about the design of a low-noise amplifier (LNA) engineered to amplify ultra-weak signals while preserving signal clarity. This project combines advanced materials and circuit design techniques to minimize noise, ensuring cleaner, more accurate signal amplification which is ideal for sensitive RF applications.",
      link: "/project-details/2"
    },
    {
      id: 3,
      title: "3. Magnetic Fields From Power Lines and Their Potential Interference with Pacemakers",
      description: "Explore electromagnetic concepts and their impact on the world around us. This project specifically examines how electromagnetic fields from high-power transmission lines might affect individuals with pacemakers — a small, battery-powered device that helps regulate heart rhythm and rate.",
      link: "/project-details/3"
    },
    {
      id: 4,
      title: "4. Little Lemon Restaurant Website",
      description: "Explore my Meta capstone project that covers both the front-end and the back-end for a theoretical restaurant called Little Lemon.",
      link: "/project-details/4"
    },
    {
      id: 5,
      title: "5. Personal Experience of Kakehashi Trip",
      description: "Read about my experience being apart of the Kakehashi Project, a government funded grassroots exchange program that brings groups of young Japanese Americans to Japan for engaging, focused and customized experiences.",
      link: "/project-details/5"
    },
  ];

  return (
    <div>
      <section id="projects">
        <h2 id="project-title">Projects</h2>
        <div className="projects-container">
          {projectLinks.map((project) => (
            <div className="project-card" key={project.id}>
              <br />
              <h3>{project.title}</h3>
              <br />
              <p>{project.description}</p>
              <br />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
