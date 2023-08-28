import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta name="google-signin-client_id" content="1086323365705-ejpemsoqm1jipkpglq8e4pp7e31h4n26.apps.googleusercontent.com" /> */}
          <script src="https://apis.google.com/js/platform.js" async defer />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
