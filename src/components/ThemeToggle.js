import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#222" : "#f5f5f5",
    color: darkMode ? "#ffffff" : "#000000",
    padding: "30px",
    marginTop: "40px"
  };

  return (
    <div style={themeStyle}>
      <h2>Theme Toggle SPA</h2>
      <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
