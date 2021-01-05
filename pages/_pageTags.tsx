import React from 'react';
import Head from 'next/head';

type Props = {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
};

const pageTags = ({ pageTitle, pageDescription, pageUrl }: Props) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Calendar DND" />
      <link rel="canonical" href={pageUrl} />
    </Head>
  );
};

export default pageTags;
