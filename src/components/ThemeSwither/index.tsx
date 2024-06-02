"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <MdLightMode size={25} />
      ) : (
        <MdDarkMode size={25} />
      )}
    </button>
  );
};
export default ThemeSwitcher;
