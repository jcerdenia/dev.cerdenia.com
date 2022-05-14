export interface NavItem {
  display: string;
  path: string;
  disabled?: boolean;
  iconClassName: string;
}

const navItems: NavItem[] = [
  {
    display: "Home",
    path: "/",
    iconClassName: "bi bi-house-fill",
  },
  {
    display: "About",
    path: "/about",
    iconClassName: "bi bi-info-lg",
  },
];

export default navItems;
