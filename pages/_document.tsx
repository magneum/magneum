import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="mobile-web-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="application-name" content="magneum"></meta>
      <meta name="apple-mobile-web-app-title" content="magneum"></meta>
      <meta name="theme-color" content="#1c1c1c"></meta>
      <meta name="msapplication-navbutton-color" content="#1c1c1c"></meta>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      ></meta>
      <meta name="msapplication-starturl" content="/"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/magneum.png"
      ></link>
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="192x192"
        href="/magneum.png"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
