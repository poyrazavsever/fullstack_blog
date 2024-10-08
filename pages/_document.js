import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="bg-bg_light dark:bg-bg_dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
