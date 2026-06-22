// Imports React so React code can be used in this file
import React from "react";

// Imports ReactDOM so the React app can be displayed in the browser
import ReactDOM from "react-dom/client";

// Imports BrowserRouter so page navigation can work without reloading the website
import { BrowserRouter } from "react-router-dom";

// Imports the main App component
import App from "./App";

// Imports the CSS file that styles the whole website
import "./style.css";

// Finds the root div in index.html and starts the React app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter wraps the app so routes and links can work
  <BrowserRouter>
    {/* Displays the main App component */}
    <App />
  </BrowserRouter>
);