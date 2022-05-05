import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { theme } from './_app';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
