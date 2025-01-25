import { getLocalStorage, setLocalStorage } from "@utils/localStorage";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = getLocalStorage("theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    if (theme === "texture") document.body.classList.add("texture");
    else document.body.classList.remove("texture");

    setLocalStorage("theme", theme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
