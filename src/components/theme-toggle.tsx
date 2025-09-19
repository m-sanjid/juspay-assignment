import { useContext } from "react";
import { Icons } from "./icons";
import { ThemeContext } from "@/context/theme-context";

export const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
  
    return (
      <button onClick={toggleTheme} className="icon-btn">
        <Icons name="sun" />
      </button>
    );
  };
  