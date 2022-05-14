import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const initialThemeScript = `
      document.body.dataset.theme = (function() {
        const theme = window.localStorage.getItem("theme");
        if (theme) return theme;
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        return query.matches ? "dark" : "light";
      })();
    `;

    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
