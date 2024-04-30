"use client";

import { useState, useEffect } from "react";

const useMode = () => {
   const preferDarkQuery = "(prefers-color-scheme: dark)";
   const storageKey = "theme";

   const toggleTheme = (theme) => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
      window.localStorage.setItem(storageKey, theme);
   };

   const getUserPreference = () => {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref) {
         return userPref;
      }
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
   };

   const [mode, setMode] = useState(getUserPreference());

   useEffect(() => {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const handleChange = () => {
         const newMode = getUserPreference();
         setMode(newMode);
         toggleTheme(newMode);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
         mediaQuery.removeEventListener("change", handleChange);
      };
   }, []);

   return mode;
};

export default useMode;
