import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <header className="header">
        <h1>Rutuja Dadge</h1>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <section data-aos="fade-up" className="hero">
        <h2>AI & Data Science Enthusiast</h2>
        <p>Passionate about Python, APIs, and Automation</p>
      </section>

      {/* About Section */}
      <motion.section
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>
          I’m pursuing a B.E. in AI & Data Science at SRTTC-FOE (SPPU). 
          Experienced in building automation tools and API-driven workflows.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Projects</h2>
        <div className="project-card" data-aos="zoom-in">
          <h3>Court Data Fetcher</h3>
          <p>Automates fetching and parsing of court case data using Selenium.</p>
          <a href="https://court-data-fetcher-1.onrender.com/" target="_blank">
            Live Demo
          </a>
        </div>

        <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
          <h3>WhatsApp-Driven Google Drive Assistant</h3>
          <p>
            Uses n8n workflows + WhatsApp API to manage Google Drive files
            (list, delete, move, summarize).
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Skills</h2>
        <ul>
          <li>Python, Flask, APIs</li>
          <li>Google Cloud, n8n Automation</li>
          <li>React, JavaScript</li>
          <li>Git, GitHub, Render Deployment</li>
        </ul>
      </motion.section>

      {/* Contact + Badges */}
      <section className="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <div className="badges">
          <a href="https://github.com/ruutudadge" target="_blank">
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
            />
          </a>
          <a href="https://linkedin.com/in/ruutudadge" target="_blank">
            <img
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:dadgeruutu@gmail.com">
            <img
              src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Email"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
