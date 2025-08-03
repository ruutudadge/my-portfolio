import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Rutuja Dadge</h1>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I'm Rutuja 👋</h2>
        <p>Aspiring AI & Data Science Developer | Enthusiastic Learner</p>
      </motion.section>

      {/* About Section */}
      <section id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I am an undergraduate AI & Data Science student passionate about
          building intelligent applications and automation workflows. My goal is
          to solve real-world problems using modern technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>Court Data Fetcher</h3>
            <p>Automates court case data extraction and analysis.</p>
            <a href="https://github.com/ruutudadge/court-data-fetcher" target="_blank">View on GitHub</a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>WhatsApp-Driven Google Drive Assistant</h3>
            <p>Control Google Drive via WhatsApp using n8n + Flask.</p>
            <a href="https://github.com/ruutudadge/whatsapp-driven-google-assistant" target="_blank">View on GitHub</a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-aos="fade-up">
        <h2>Skills</h2>
        <ul>
          <li>Python, Flask</li>
          <li>React, Vite, JavaScript</li>
          <li>n8n Workflows, API Integration</li>
          <li>Google Cloud, OAuth, Webhooks</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dadgeruutu@gmail.com">dadgeruutu@gmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/ruutudadge" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/ruutudadge" target="_blank"> GitHub</a>
        </p>
      </section>

      <footer>
        <p>© 2025 Rutuja Dadge | Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
