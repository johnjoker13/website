import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="front-end portfolio" />
          <meta
            name="description"
            content="Welcome to my website where i share my projects and learnings"
          />
          <link rel="icon" href="/coding.png" type="image/icon type" />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
