import React from 'react';
import './styles/Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";  

import Home from './pages/Home';
import Games from './pages/Games';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="Background">
      <div className="BackgroundCenter">
        <Router>
          <Route exact path="/home">
            <Redirect to="/"/>
          </Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/about-me" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;