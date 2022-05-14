/* eslint-disable react/no-unescaped-entities */
import SideBar from "./SideBar";
import InternalLink from "./InternalLink";

const AboutSideBar = (): JSX.Element => {
  return (
    <SideBar title="About" noImage>
      <p>
        I'm Joshua Cerdenia, a developer working with TypeScript, React,
        Angular, and Node, currently at{" "}
        <a href="https://firevisor.com">FireVisor</a> helping manufacturers make
        better use of data.
      </p>
      <p>
        On the side, I'm a <a href="https://music.cerdenia.com">composer</a> of
        orchestral and chamber music. This site is a growing document of things
        I'm building.
      </p>
      <InternalLink
        href="/about"
        textClassName="small text-muted link-muted"
        iconClassName="bi bi-caret-right-fill"
      >
        More about me
      </InternalLink>
    </SideBar>
  );
};

export default AboutSideBar;
