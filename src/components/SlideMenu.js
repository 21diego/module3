import React from 'react';
import '../assets/css/Menu.css';
import  '../assets/css/SlideMenu.css';
import {Route, Link, Switch} from 'react-router-dom';

// COMPONENTES
import Home from './Home';
import GameDetail from './GameDetail';
import Schedule from './Schedule';
import Login from './Login';


function SlideMenu(){
  
  return (
    <div>
    
      <div id="sidebar" className="active position-fixed">
        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </div>
      
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/game/:id" children={<GameDetail />}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    
    
    </div>
  )
}

export default SlideMenu;