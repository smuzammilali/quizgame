import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import App from './App';

const config = {
  initialColorMode: 'dark', // Start the app in dark mode
  useSystemColorMode: false, // Do not switch based on the user's system preference
};

const theme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
