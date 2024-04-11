import { experimental_extendTheme as extendTheme, Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material';
import React from 'react';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252',
        },
        // ...
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#52ffff',
        },
        // ...
      },
    },
  },
  // ...other properties
});

function Root({ children }) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </>
  );
}

export default Root;