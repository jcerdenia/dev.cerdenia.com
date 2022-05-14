import { Container, Row, Col } from "react-bootstrap";
import PageHead from "./PageHead";
import Footer from "./Footer";
import styles from "../styles/PageWrapper.module.css";
import NavigationBar from "./NavigationBar";

const PageWrapper = ({
  title,
  absoluteTitle,
  toExcerpt,
  sideBar,
  children,
}: any): JSX.Element => {
  return (
    <>
      <PageHead {...{ title, absoluteTitle, toExcerpt }} />
      <NavigationBar />
      <Container className={styles.childContainer}>
        <Row>
          <Col lg={9} className={styles.main}>
            {children}
          </Col>
          {sideBar ? (
            <Col lg={3} className={styles.side}>
              <div className={styles.sideContent}>{sideBar}</div>
            </Col>
          ) : null}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PageWrapper;
