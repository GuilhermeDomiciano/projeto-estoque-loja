"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";



const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(false); 
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark"); 
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)} 
      className="bg-primary"
      
    >
      {isDarkMode ? <FaSun className="w-6 h-6"/> : <FaMoon className="w-6 h-6"/>}
    </button>
  );
};

export default ThemeSwitcher;