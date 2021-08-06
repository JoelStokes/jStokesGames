import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
        main: '#24FBE0'
    },
  },  
  typography: {
    fontFamily: 'Khula',
    h4: {
      fontFamily: 'Raleway'
    },
    h3: {
      fontSize: '3.5rem',
      [breakpoints.up('md')]: {
        fontSize: '7.5rem',
      },    
    }
  },
  button: {
    fontFamily: 'Khula'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
