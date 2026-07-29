import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();



export function ThemeProvider({ children }) {


  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark";

  });



  useEffect(() => {


    const body = document.body;


    if (darkMode) {

      body.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );


    } else {

      body.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

    }



    return () => {

      body.classList.remove("dark");

    };


  }, [darkMode]);





  const toggleTheme = () => {

    setDarkMode((previousMode) => !previousMode);

  };





  return (

    <ThemeContext.Provider

      value={{
        darkMode,
        toggleTheme
      }}

    >

      {children}

    </ThemeContext.Provider>

  );

}