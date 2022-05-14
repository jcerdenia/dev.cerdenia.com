import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Socials from "./Socials";
import navItems, { NavItem } from "../data/navItems";

const Footer = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <span className="small text-muted me-1">© 2022 Joshua Cerdenia</span>
      <Socials itemClassName={`${styles.link} text-muted mx-2`} />
    </div>
  );
};

export default Footer;
