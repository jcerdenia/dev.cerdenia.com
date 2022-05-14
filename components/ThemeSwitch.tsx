import { Button } from "react-bootstrap";
import useTheme from "../lib/hooks/useTheme";

interface ThemeSwitchProps {
  className?: string;
}

interface ThemeParams {
  theme: string;
  toggleTheme: () => void;
}

interface IconMap {
  [theme: string]: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps): JSX.Element => {
  const { theme, toggleTheme }: ThemeParams = useTheme();

  const iconClasses: IconMap = {
    light: "bi bi-moon-stars",
    dark: "bi bi-sun",
  };

  return (
    <Button
      className={className}
      variant="warning"
      size="sm"
      onClick={() => toggleTheme()}
      onFocus={(e) => e.target.blur()}
    >
      <i className={iconClasses[theme || "light"]} />
    </Button>
  );
};

export default ThemeSwitch;
