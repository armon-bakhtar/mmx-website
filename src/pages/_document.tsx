import { poppins, subjetivity } from '@/shared/constants/fonts';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#04000d" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#04000d" />
      </Head>
      <body className={`${poppins.variable} ${subjetivity.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
