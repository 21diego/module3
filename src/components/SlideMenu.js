import React from 'react';
import '../assets/css/Menu.css';
import {BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';

import Home from './Home';


function SlideMenu(){
  
  return (
    <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id">
          </Route>
          <Route path="/topics">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default SlideMenu;