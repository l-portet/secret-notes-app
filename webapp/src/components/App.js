import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './home';
import Signup from './signup';
import Signin from './signin';
import Note from './note';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/note">
            <Note />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
