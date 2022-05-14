import { useContext, useEffect } from "react";
import { AppStateContext } from "../../components/AppStateProvider";

const useTheme = (): {
  theme: string;
  toggleTheme: () => void;
} => {
  const { theme, setTheme } = useContext(AppStateContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.dataset.theme = newTheme;
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    setTheme(document.body.dataset.theme);
  }, [setTheme]);

  return { theme, toggleTheme };
};

export default useTheme;
