// Imports useState so the form can remember what the user types
import { useState } from "react";

// Imports useNavigate so the page can redirect after the form is submitted
import { useNavigate } from "react-router-dom";

// This function creates the Contact Me page
function Contact() {
  // Creates a navigation function used to move the user to another page
  const navigate = useNavigate();

  // Stores all form input values in one object
  const [contactInfo, setContactInfo] = useState({
    firstName: "", 
    lastName: "",  
    phone: "",     
    email: "",     
    message: ""    
  });

  // This function updates the form data whenever the user types
  function handleChange(event) {
    // Gets the input field name, such as firstName or email
    const name = event.target.name;

    // Gets the value typed by the user
    const value = event.target.value;

    // Updates only the field that changed while keeping the other values
    setContactInfo({
      ...contactInfo,
      [name]: value
    });
  }

  // This function runs when the user submits the form
  function handleSubmit(event) {
    // Stops the page from refreshing
    event.preventDefault();

    // Sends the form data back to the Home page
    navigate("/", { state: contactInfo });
  }

  // Displays the Contact Me page content
  return (
    // Groups the whole Contact page
    <section>
      {/* Page title */}
      <h1>Contact Me</h1>

      {/* Contact information panel */}
      <div className="contactPanel">
        <h2>My Contact Information</h2>
        <p><strong>Email:</strong> remlanvisda@gmail.com</p>
        <p><strong>Phone:</strong> 437-450-0297</p>
        <p><strong>Location:</strong> Etobicoke, Ontario</p>
      </div>

      {/* Form that collects user contact information */}
      <form onSubmit={handleSubmit} className="contactForm">
        {/* First name input */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={contactInfo.firstName}
          onChange={handleChange}
          required
        />

        {/* Last name input */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contactInfo.lastName}
          onChange={handleChange}
          required
        />

        {/* Phone number input */}
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          value={contactInfo.phone}
          onChange={handleChange}
        />

        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />

        {/* Message input */}
        <textarea
          name="message"
          placeholder="Message"
          value={contactInfo.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Submit button */}
        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </section>
  );
}

// Exports the Contact component so App.jsx can use it
export default Contact;