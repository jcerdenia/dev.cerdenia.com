/* eslint-disable react/no-unescaped-entities */
import AboutSideBar from "../components/AboutSideBar";
import PageWrapper from "../components/PageWrapper";
import ProjectGrid from "../components/ProjectGrid";
import SectionLayout from "../components/SectionLayout";

const HomePage = (): JSX.Element => {
  return (
    <PageWrapper
      title="Joshua Cerdenia Projects"
      absoluteTitle
      sideBar={<AboutSideBar />}
    >
      <SectionLayout title="Open-Source Applications">
        <p>
          Various side projects done on my own time and from scratch, with or
          without collaborators, and of varying degrees of doneness - enough to
          all be considered shipped, though not necessarily maintained.
        </p>
        <p>
          Some of these were written early into my first forays into app
          development and don't necessarily reflect my current ability (at least
          I hope not). At this time they skew heavily toward native Android
          apps, though at present, I'm more interested in developing for the
          web.
        </p>
        <ProjectGrid />
        <p>
          More projects{" "}
          <a href="https://github.com/joshuacerdenia">on my GitHub.</a>
        </p>
      </SectionLayout>
    </PageWrapper>
  );
};

export default HomePage;
