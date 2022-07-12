import Head from "next/head";
import { getExcerpt } from "../lib/utils";

interface PageHeadProps {
  title: string;
  absoluteTitle: string;
  toExcerpt: string;
}

const PageHead = ({
  title,
  absoluteTitle,
  toExcerpt,
}: PageHeadProps): JSX.Element => {
  const excerpt = toExcerpt && getExcerpt(toExcerpt);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="description" content={excerpt} />
      <meta property="og:description" content={excerpt} />
      <meta
        property="og:image"
        content="https://cerdenia.com/images/jc-bg.jpeg"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta
        name="twitter:image"
        content="https://cerdenia.com/images/jc-bg.jpeg"
      />
      <link rel="icon" href="/images/jc-bg.jpeg" />
      <title>
        {title}
        {!absoluteTitle ? " • Joshua Cerdenia" : null}
      </title>
    </Head>
  );
};

export default PageHead;
