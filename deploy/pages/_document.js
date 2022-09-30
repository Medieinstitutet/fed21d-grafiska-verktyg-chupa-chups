import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head lang='en' dir='ltr'>
        <title>Lightsaber X</title>

        <meta
          name='description'
          content='World leading webshop for buying your own lightsaber'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta property='og:title' content='Lightsaber X' />
        <meta
          property='og:description'
          content='World leading webshop for buying your own lightsaber'
        />
        <meta property='og:url' content='https://lightsaberx.com/' />
        <meta property='og:image' content='https://imgur.com/a/jLJJT2i' />
        <meta property='og:site_name' content='Lightsaber X' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Alef&family=Fjalla+One&family=Inder&family=Inter:wght@700&family=Itim&family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
