/* eslint-disable react/no-unescaped-entities */
import PageWrapper from "../components/PageWrapper";
import SectionLayout from "../components/SectionLayout";
import ContactSideBar from "../components/ContactSideBar";

const AboutPage = (): JSX.Element => {
  return (
    <PageWrapper title="About" sideBar={<ContactSideBar />}>
      <SectionLayout title="About">
        <p>
          I'm a{" "}
          <a href="https://github.com/joshuacerdenia.com">software developer</a>{" "}
          working with JavaScript and TypeScript, Node, Express, NestJS,
          PostgreSQL, MongoDB, React, and Angular. On the side, I'm fond of
          Android development with Kotlin, and have occasionally dipped a toe
          into data analysis with Python. I love exploring different things and
          trying to discover where my true strengths lie.
        </p>
        <p>
          Other than that, I'm a{" "}
          <a href="https://music.cerdenia.com">composer</a> of orchestral and
          chamber music which has been performed in concert stages around the
          world. My studies have included some work in computer music, from
          which I learned to think computationally and eventually derived a
          broader interest in programming. After dabbling in it for a long time,
          I made the jump to software development professionally in 2021. My
          sensibilities as a composer definitely find their way often into my
          technical work.
        </p>
        <p>
          I was born and raised in the Philippines, and have spent seasons in
          Singapore, Baltimore, and New York City.
        </p>
        <h5 className="mt-4">About this site</h5>
        <p>
          This site is built with <a href="https://nextjs.org/">Next.js</a> and
          hosted on
          <a href="https://vercel.com">Vercel</a>.
        </p>
      </SectionLayout>
    </PageWrapper>
  );
};

export default AboutPage;
