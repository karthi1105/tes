import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zxx">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
