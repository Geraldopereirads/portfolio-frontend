"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <MdDarkMode className="iconsSize hover"/>
      ) : (
        <MdLightMode  className="iconsSize hover"/>
      )}
    </button>
  );
};
export default ThemeSwitcher;
