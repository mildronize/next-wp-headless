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
      <link rel="icon"  type="image/png" href="/favicon.png"/>
      <link rel="apple-touch-icon" href="/favicon.png" />
      <title>My site</title>
    </Head>
  </div>
);

export default Header;
