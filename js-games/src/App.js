import React from 'react';
import './styles/Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";  

import Home from './pages/Home';
import SoloGame from './pages/SoloGame';
import TeamGame from './pages/TeamGame';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/solo-games" component={SoloGame} />
        <Route exact path="/team-games" component={TeamGame} />
        <Route exact path="/professional" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;