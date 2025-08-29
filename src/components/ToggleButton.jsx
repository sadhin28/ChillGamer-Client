import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border bg-opacity-20 bg-gray-700 hover:bg-gray-600 transition-colors"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
