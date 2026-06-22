import myProfile from "../assets/profile.jpg";
import myResume from "../assets/resume.pdf";

// This function creates the About Me page
function About() {
  // The return statement displays the HTML/JSX content on the page
  return (
    // This section groups all About Me content together
    <section>
      {/* Page title */}
      <h1>About Me</h1>

      {/* This box holds the profile image and the text side by side */}
      <div className="aboutBox">
        {/* Displays the imported profile image */}
        <img src={myProfile} alt="My profile" className="profileImage" />

        {/* This div groups the name, paragraph, and resume button */}
        <div>
          {/* Displays my full legal name */}
          <h2>Kevin Remlan D. Visda</h2>

          {/* Short professional paragraph about who I am */}
          <p>
            I am a creative Full Stack Developer with a background in Multimedia and Software Engineering 
            Technician. I enjoy building web applications that are visually appealing, user-friendly, and helpful. 
            My goal is to combine design and coding skills to create clean, functional, and meaningful digital 
            experiences.
          </p>

          {/* Opens my resume PDF in a new browser tab */}
          <a href={myResume} target="_blank" className="button">
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

// Exports the About component so App.jsx can use it
export default About;