import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      upDateDarkMode(!darkMode);
    };

    useEffect(() =>{
      const isDark = 
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').marches);
        setDarkMode(isDark);
        upDateDarkMode(isDark);
    }, [])
  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} > 
    {children}
  </DarkModeContext.Provider>
}

function upDateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light'
  }
}

export const useDarkMode = () => useContext(DarkModeContext);