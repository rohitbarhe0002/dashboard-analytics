import React from "react";
import { useThemeProvider } from "../utils/ThemeContext";
import Icon from "./Icons/Icon";

const ThemeToggle: React.FC = () => {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();

  return (
    <div>
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={currentTheme === "light"}
        onChange={() => changeCurrentTheme(currentTheme === "light" ? "dark" : "light")}
      />
      <label
        className="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full"
        htmlFor="light-switch"
      >
        <Icon
          name="sun"
          className="dark:hidden fill-current text-gray-500/80 dark:text-gray-400/80"
          width={16}
          height={16}
        />

        <Icon
          name="moon"
          className="hidden dark:block fill-current text-gray-500/80 dark:text-gray-400/80"
          width={16}
          height={16}
        />

        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
