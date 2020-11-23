import '../styles/index.css';
import React from 'react';
import Head from 'next/head';
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";
// import { hotjar } from "react-hotjar";

/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   LogRocket.init("jqzjcy/sari-ilanlar");
  //   setupLogRocketReact(LogRocket);
  //   hotjar.initialize("2064026", "6");
  // }, []);
  return (
    <div className="w-full h-full bg-red-500 relative">
      <Head>
        <meta name="theme-color" content="#4AB0D9" />
        <meta
          name="viewport"
          content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
/* eslint-enable react/prop-types,react/jsx-props-no-spreading */
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = '/__appsignal-web-vitals';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.

  // eslint-disable-next-line
  (navigator.sendBeacon && navigator.sendBeacon(url, body))
    || fetch(url, { body, method: 'POST', keepalive: true });
}
export default MyApp;
