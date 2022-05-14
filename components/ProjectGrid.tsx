import { useState } from "react";
import { Col, Row, Image, Button, Badge } from "react-bootstrap";
import projects from "../data/apps";
import styles from "../styles/ProjectGrid.module.css";

interface ProjectCardProps {
  project: any;
  minimal?: boolean;
}

interface ProjectGridProps {
  count?: number;
  minimal?: boolean;
  children?: any;
}

const ProjectCard = ({ project, minimal }: ProjectCardProps): JSX.Element => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
    >
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          style={{
            filter: showLinks ? "brightness(40%)" : "brightness(100%)",
            transform: showLinks ? "scale(103%)" : "none",
          }}
          src={project.image}
          alt="screenshot"
          rounded
        />
        <div className={styles.linksContainer}>
          <span
            className={styles.linksRow}
            style={{ opacity: showLinks ? 1 : 0 }}
          >
            {project.links?.map((link: any, i: number) => {
              return (
                <Button
                  key={i}
                  className="mx-1 my-1"
                  href={link.url}
                  variant="light"
                  size="sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${link.iconClassName} me-1`} />
                  {link.label}
                </Button>
              );
            })}
          </span>
        </div>
      </div>
      <div className="my-3">
        <h5>{project.name}</h5>
        <p className="small">{project.description}</p>
        <span>
          {!minimal &&
            project.tech.sort().map((item: any, idx: number) => {
              return (
                <Badge key={idx} bg="secondary" className="me-1 light">
                  {item}
                </Badge>
              );
            })}
        </span>
      </div>
    </div>
  );
};

const ProjectGrid = ({
  count = projects.length,
  minimal,
  children,
}: ProjectGridProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={3} className="g-4">
        {projects
          .filter((project: any) => !project.isHidden)
          .slice(0, count)
          .map((project, i) => {
            return (
              <Col key={i}>
                <ProjectCard project={project} minimal={minimal} />
              </Col>
            );
          })}
      </Row>
      {children}
    </div>
  );
};

export default ProjectGrid;
