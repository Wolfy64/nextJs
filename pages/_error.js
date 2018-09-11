import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Oops something went wrong.</h1>
    <Link href="/">
      <a>Try to go back!</a>
    </Link>
  </div>
);

export default errorPage;
