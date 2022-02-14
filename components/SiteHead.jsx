import Head from "next/head";

const SiteHead = ({ routeTitle }) => {
  return (
    <Head>
      <title>{routeTitle}</title>
    </Head>
  );
};

export default SiteHead;
