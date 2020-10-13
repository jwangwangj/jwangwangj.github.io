import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './pages/Landing'
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}