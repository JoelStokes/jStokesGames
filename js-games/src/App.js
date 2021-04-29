import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";  

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        Coming Soon
        <Home/>
      </div>
    </Router>
  );
}

export default App;