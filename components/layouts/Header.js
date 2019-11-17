import React from 'react';
import Head from 'next/head';
import stylesheet from '../../styles/index.scss';

  const Header = () => (
    <div>
      <Head>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: stylesheet }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff"/>
      <link rel="icon"  type="image/png" href="/icons/favicon.png"/>
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png.png" />
      <title>Next version of Mildronize</title>
    </Head>
  </div>
);

export default Header;
