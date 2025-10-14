import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  // Apply theme changes whenever 'theme' updates

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme, element]);

  // Toggle theme on button click
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        onClick={toggleTheme}
        src={LightButton}
        alt="Light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark Mode Button */}
      <img
        onClick={toggleTheme}
        src={DarkButton}
        alt="Dark mode"
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
