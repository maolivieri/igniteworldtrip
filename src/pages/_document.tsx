import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <link rel='shortcut icon' href='favicon.png' type='image/png' />
          <link rel='apple-touch-icon' href='favicon.png'></link>

          <meta property='og:locale' content='pt_BR' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='WorldTrip - Olivieri' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
