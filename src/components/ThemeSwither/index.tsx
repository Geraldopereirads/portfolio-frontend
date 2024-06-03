"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <MdLightMode  className="iconsSize hover"/>
      ) : (
        <MdDarkMode className="iconsSize hover"/>
      )}
    </button>
  );
};
export default ThemeSwitcher;
