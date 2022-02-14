import Head from "next/head";

const SiteHead = ({ routeTitle }) => {
  return (
    <Head>
      <title>{routeTitle}</title>
      <meta name="keywords" content="front-end portfolio" />
      <meta
        name="description"
        content="Welcome to my website where i share my projects and learnings"
      />
    </Head>
  );
};

export default SiteHead;
