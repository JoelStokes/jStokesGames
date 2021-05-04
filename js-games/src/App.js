import React from 'react';
import './styles/Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";  

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';
import SoloGame from './pages/SoloGame';
import TeamGame from './pages/TeamGame';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Khula',
      h4: {
        fontFamily: 'Raleway'
      }
    },});

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;