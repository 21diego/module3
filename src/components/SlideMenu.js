import React from 'react';
import '../assets/css/Menu.css';
import  '../assets/css/SlideMenu.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Home from './Home';
import GameDetail from './GameDetail';
import Schedule from './Schedule';



function SlideMenu(){
  
  return (
    <div>
    <Router>
      <div id="sidebar" className="active position-fixed">
        <ul className="list-unstyled components">
          <li className="active">>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="#">Topics</Link>
          </li>
        </ul>
      </div>
      
      <div>
        <Switch>
          <Route path="/game/:id" children={<GameDetail />}>
          </Route>
          <Route path="/schedule" component={Schedule}>
            
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