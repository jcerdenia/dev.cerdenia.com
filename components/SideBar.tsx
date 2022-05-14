import { Row, Col, Image } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";

interface SideBarProps {
  title: string;
  children: any;
  noImage?: boolean;
}

const SideBar = ({ title, children, noImage }: SideBarProps): JSX.Element => {
  return (
    <Row>
      {!noImage && (
        <Col
          lg={12}
          md={3}
          xs={4}
          className="mb-3 d-flex justify-content-center align-items-center"
        >
          <Image
            className={styles.picture}
            width="140"
            height="140"
            src="/images/profile.jpeg"
            alt="profile"
            fluid
          />
        </Col>
      )}
      <Col
        lg={12}
        md={!noImage && 9}
        xs={!noImage && 8}
        className="d-flex align-items-center"
      >
        <section>
          <h5 className={styles.title}>{title}</h5>
          <div className={styles.content}>{children}</div>
        </section>
      </Col>
    </Row>
  );
};

export default SideBar;
