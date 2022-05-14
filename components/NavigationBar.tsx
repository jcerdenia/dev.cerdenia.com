import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import ThemeSwitch from "./ThemeSwitch";
import useTheme from "../lib/hooks/useTheme";
import navItems, { NavItem } from "../data/navItems";
import styles from "../styles/NavigationBar.module.css";

const NavigationBar = (): JSX.Element => {
  const { asPath } = useRouter();
  const { theme } = useTheme();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <Navbar expand={true} variant={(theme as any) || "light"}>
      <Container className={styles.container}>
        <div className="d-flex">
          <Navbar.Brand className={styles.brand} href="/">
            Joshua Cerdenia Projects
          </Navbar.Brand>
        </div>
        <Nav className={styles.secondary} activeKey={asPath}>
          <span className={styles.secondaryItems}>
            {navItems.map((navItem) => {
              return (
                <Nav.Link
                  key={navItem.path}
                  className={styles.link}
                  href={navItem.path}
                  disabled={navItem.disabled}
                >
                  {navItem.display}
                </Nav.Link>
              );
            })}
          </span>
          <ThemeSwitch className={styles.themeSwitch} />
          <Button
            className={styles.toggle}
            variant={theme || "secondary"}
            onClick={() => setShowOffcanvas(true)}
          >
            <i className="bi bi-list" />
          </Button>
        </Nav>
      </Container>

      <Offcanvas
        id={styles.offcanvas}
        placement="end"
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        restoreFocus={false}
      >
        <Offcanvas.Header
          closeButton
          closeVariant={theme === "dark" ? "white" : undefined}
        >
          <h6>Menu</h6>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {navItems
            .filter((navItem: NavItem) => !navItem.disabled)
            .map((navItem: NavItem) => {
              return (
                <p key={navItem.path} className="mb-4">
                  <Link href={navItem.path} passHref>
                    <a
                      className={`${styles.link} lead`}
                      onClick={() =>
                        navItem.path === asPath && setShowOffcanvas(false)
                      }
                    >
                      {navItem.display}
                    </a>
                  </Link>
                </p>
              );
            })}
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavigationBar;
