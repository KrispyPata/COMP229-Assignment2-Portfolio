// This function creates the Education page
function Education() {
  // Displays the education content on the page
  return (
    // Groups all Education page content together
    <section>
      {/* Page title */}
      <h1>Education</h1>

      {/* First education information box */}
      <div className="infoBox">
        {/* Name of the program */}
        <h2>Diploma in Software Engineering Technician</h2>

        {/* School name */}
        <p><strong>School:</strong> Centennial College</p>

        {/* Years attended */}
        <p><strong>Year:</strong> 2026 - 2027</p>

        {/* Type of qualification earned */}
        <p><strong>Qualification:</strong> Diploma</p>
      </div>

      {/* Second education information box */}
      <div className="infoBox">
        {/* Name of the degree program */}
        <h2>Bachelor of Science in Entertainment and Multimedia Computing</h2>

        {/* School name */}
        <p><strong>School:</strong> Holy Angel University</p>

        {/* Years attended */}
        <p><strong>Year:</strong> 2020 - 2024</p>

        {/* Type of qualification earned */}
        <p><strong>Qualification:</strong> Bachelor's Degree</p>
      </div>
    </section>
  );
}

// Exports the Education component so App.jsx can use it
export default Education;