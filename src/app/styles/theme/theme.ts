'use client';
import { createTheme } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#161616',
    },
    secondary: {
      main: '#2B2B2B',
    },
    tertiary: {
      main: '#A70038',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColorOptions;
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export default theme;
