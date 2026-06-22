// Imports service images so Vite includes them in the final build
import webImage from "../assets/web.PNG";
import appImage from "../assets/app.PNG";
import programmingImage from "../assets/programming.PNG";

// This function creates the Services page
function Services() {
  // Displays the Services page content
  return (
    // Groups all services content together
    <section>
      {/* Page title */}
      <h1>Services</h1>

      {/* This container holds all service cards */}
      <div className="cardContainer">
        
        {/* First service card */}
        <div className="card">
          {/* Image related to web development */}
          <img src={webImage} alt="Web development" />

          {/* Service title */}
          <h2>Web Development</h2>

          {/* Short description of the service */}
          <p>
            I can create basic websites using HTML, CSS, JavaScript, and React.
          </p>
        </div>

        {/* Second service card */}
        <div className="card">
          {/* Image related to illustration */}
          <img src={appImage} alt="App development" />

          {/* Service title */}
          <h2>Illustration</h2>

          {/* Short description of the service */}
          <p>
            I can create simple illustrations and graphics for your projects.
          </p>
        </div>

        {/* Third service card */}
        <div className="card">
          {/* Image related to programming help */}
          <img src={programmingImage} alt="Programming help" />

          {/* Service title */}
          <h2>Programming Help</h2>

          {/* Short description of the service */}
          <p>
            I can help with basic coding tasks, debugging, and small projects.
          </p>
        </div>
      </div>
    </section>
  );
}

// Exports the Services component so App.jsx can use it
export default Services;