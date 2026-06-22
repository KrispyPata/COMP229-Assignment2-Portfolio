// Imports Link for navigation buttons, useLocation to receive form data, and useNavigate to redirect pages
import { Link, useLocation, useNavigate } from "react-router-dom";

// This function creates the Home page
function Home() {
  // Gets information sent from another page, like the Contact form
  const location = useLocation();

  // Creates a navigation function used to move or refresh the page
  const navigate = useNavigate();

  // Stores the form data that was sent from the Contact page
  const formData = location.state;

  // This function closes the popup message
  function closeMessage() {
    // Goes back to the Home page and removes the saved form data
    navigate("/", { replace: true });
  }

  // Displays the Home page content
  return (
    // Main hero section for the Home page
    <section className="hero">
      {/* Shows the popup only if form data exists */}
      {formData && (
        // Dark background behind the popup, clicking it closes the message
        <div className="popupBackground" onClick={closeMessage}>
          {/* Popup box, clicking inside it will not close the message */}
          <div className="popupBox" onClick={(event) => event.stopPropagation()}>
            {/* Popup title */}
            <h2>Message Received</h2>

            {/* Personalized thank you message using the user's first name */}
            <p>Thank you {formData.firstName}!</p>

            {/* Confirms that the message was received */}
            <p>Your message was received successfully.</p>

            {/* Button that closes the popup */}
            <button className="button" onClick={closeMessage}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main welcome title */}
      <h1>Welcome to My Portfolio!</h1>

      {/* Horizontal line used as a simple divider */}
      <hr></hr>

      {/* Mission statement */}
      <p>
        My mission is to create visually appealing and practical web applications that 
        solve real problems while giving users a smooth and enjoyable experience.
      </p>

      {/* Button link that sends the user to the About Me page */}
      <Link to="/about" className="button">
        Learn More About Me
      </Link>
    </section>
  );
}

// Exports the Home component so App.jsx can use it
export default Home;