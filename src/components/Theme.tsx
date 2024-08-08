import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { useEffect, useState } from "react";

const THEME = "dark";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeMode = function () {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(THEME, JSON.stringify(!isDarkMode));

    document.body.classList.toggle(THEME);
  };

  useEffect(() => {
    const isLocalThemeDefined = localStorage.getItem(THEME)!;

    if (isLocalThemeDefined) {
      setIsDarkMode(JSON.parse(isLocalThemeDefined));
      const isLocalThemeDark = JSON.parse(isLocalThemeDefined);
      document.body.classList.add(isLocalThemeDark && THEME);
      return;
    }

    localStorage.setItem(THEME, JSON.stringify(true));
    document.body.classList.add(THEME);
  }, []);

  return (
    <div onClick={handleThemeMode} className=" flex items-center gap-3">
      <h2 className="text-black-color dark:text-white-color font-bold tracking-[2.5px]">
        {isDarkMode ? "LIGHT" : "DARK"}
      </h2>
      <img src={isDarkMode ? sun : moon} alt="" />
    </div>
  );
};

export default Theme;
