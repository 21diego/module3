import React from 'react';
import '../assets/css/Menu.css';
import  '../assets/css/SlideMenu.css';
import {Route, Link, Switch} from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';



// COMPONENTES
import Home from './Home';
import GameDetail from './GameDetail';
import Schedule from './Schedule';
import Login from './Login';
import Register from './Register';
import Privacy from './Privacy';
import ProfileBox from './ProfileBox';
import Options from './Options';

const firebaseAppAuth = firebase.auth();




function SlideMenu(props){
  let element = '';
  let log = null;
  if(props.user){
    element = <ProfileBox user={props.user}/>
    log = <div>
            <li className="row m-0 p-0">
              <i className="fas fa-sign-out-alt fa-2x col-3 text-center"></i>
              <Link to='/login' onClick={props.signOut} className="col-9 text-left">Log Out</Link>
            </li>
          </div>
  }
  else{
    log = <div>
            <li className="row m-0 p-0">
              <i className="fas fa-sign-in-alt fa-2x col-3 text-center"></i>
              <Link to='/login' className="col-9 text-left">Log In</Link>
            </li>
          </div>
  }
  return (
    <div>
    
      <div id="sidebar" className="active position-fixed">
        {element}
        <ul className="list-unstyled components mt-3">
          <li className="active row m-0 p-0">
            <i className="far fa-futbol fa-2x col-3 text-center"></i>
            <Link to="/" className="col-9 text-left">Home</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="fas fa-calendar-week fa-2x col-3 text-center"></i>
            <Link to="/schedule" className="col-9 text-left">Schedule</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="far fa-sticky-note fa-2x col-3 text-center"></i>
            <Link to="/privacy" className="col-9 text-left">Privacy Policy</Link>
          </li>
          {log}
        </ul>
      </div>
      
      <div>
        <Switch>
          <Route path="/game/:id" children={<GameDetail />}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/options" component={Options}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/privacy" component={Privacy}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    
    
    </div>
  )
}


export default withFirebaseAuth({
	firebaseAppAuth,
})(SlideMenu);