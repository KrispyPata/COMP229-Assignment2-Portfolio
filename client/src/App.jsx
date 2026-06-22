// Imports Routes, Route, and Link so the website can have multiple pages
import { Routes, Route, Link } from "react-router-dom";

// Imports the custom logo image so it loads correctly after deployment
import logoImage from "./assets/logo.PNG";

// Imports all page components used in the website routes
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// This function creates the main layout of the website
function App() {
  return (
    <div>
      {/* Navigation bar at the top of the website */}
      <nav className="navbar">

        {/* Logo area that links back to the Home page */}
        <Link to="/" className="logo">
          {/* Displays the custom logo image */}
          <img src={logoImage} alt="My logo" className="logoImage" />

          {/* Website logo text */}
          <span>My Portfolio</span>
        </Link>

        {/* Navigation links for all six pages */}
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>

      {/* Main page content area */}
      <main className="page">
        {/* Routes decide which page appears based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer at the bottom of the website */}
      <footer>
        <p>© 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Exports the App component so main.jsx can display it
export default App;