import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './index.css'


declare module '@mui/material/styles' {

  interface Palette {
    bgImgTheme: PaletteColor;
  }

  interface PaletteOptions {
    bgImgTheme?: PaletteColorOptions;
  }
  interface Components {
    MuiDateCalendar?: {
      styleOverrides?: {
        root?: {
          width?: string;
        };
        viewTransitionContainer?: {
          width?: string;
        };
      };
    };
  }

}

let theme = createTheme({
  palette: {

    primary: {
      main: "rgb(255 103 57)",
    },

    secondary: {
      main: "#F16B40",
    },
    warning: {
      main: "#F23F57",
    },

    bgImgTheme: {
      main: "#091423",
    },
    background: {
      default: "#EAEAEA",
      // #091423
    }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 20,
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 60,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 39,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 30,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 18,
    },
    h5: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 14,
    },
    h6: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 10,
    },
  },
  // components: {
  //   MuiDateCalendar: {
  //     styleOverrides: {
  //       root: {
  //         width: '700px',
  //       },
  //       viewTransitionContainer: {
  //         width: '500px',
  //       }
  //     }
  //   }
  // }

});

theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
