import React, {useState, useEffect} from 'react';
import '../assets/css/Menu.css';
import  '../assets/css/SlideMenu.css';
import {Route, Link, Switch} from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import {db} from '../firebase';
import 'firebase/auth';



// COMPONENTES
import Home from './Home';
import GameDetail from './GameDetail';
import Schedule from './Schedule';
import Login from './Login';
import Register from './Register';
import Privacy from './Privacy';
import Contact from './Contact';
import ProfileBox from './ProfileBox';
import Options from './Options';
import Stadiums from './Stadiums';
import Stats from './Stats';

const firebaseAppAuth = firebase.auth();


function SlideMenu(props){
  const [matches, setMatches] = useState([])
  const [maps, setMaps] = useState([])
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  
  function signOut(){
    props.signOut().then(()=>{
      window.location.reload();
    })
    
  }

  useEffect(() =>{ //Database bringer
    async function loadDatabase(){
      await db.ref('/').once('value')
      .then(function(response){
          setMatches(response.val().schedule)
          setTeams(response.val().teams)
          setMaps(response.val().stadiums)
          setUsers(response.val().users)
      })
    }
    loadDatabase();},[])

  let element = '';
  let log = null;
  if(props.user){
    element = <ProfileBox user={props.user}/>
    log = <div>
            <li className="row m-0 p-0">
              <i className="fas fa-sign-out-alt fa-2x col-3 text-center"></i>
              <Link to='/' onClick={signOut} className="col-9 text-left click">Log Out</Link>
            </li>
          </div>
  }
  else{
    log = <div>
            <li className="row m-0 p-0">
              <i className="fas fa-sign-in-alt fa-2x col-3 text-center"></i>
              <Link to='/login' className="col-9 text-left click">Log In</Link>
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
            <Link to="/" className="col-9 text-left click">Home</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="fas fa-calendar-week fa-2x col-3 text-center"></i>
            <Link to="/schedule" className="col-9 text-left click">Schedule</Link>
          </li>
          <li className="row m-0 p-0">
          <i className="fas fa-igloo fa-2x col-3 text-center"></i>
            <Link to="/stadiums" className="col-9 text-left click">Stadiums</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="fas fa-chart-pie fa-2x col-3 text-center"></i>
            <Link to="/stats" className="col-9 text-left click">Stats</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="far fa-comments fa-2x col-3 text-center"></i>
            <Link to="/contact" className="col-9 text-left click">Contact Me</Link>
          </li>
          <li className="row m-0 p-0">
            <i className="far fa-sticky-note fa-2x col-3 text-center"></i>
            <Link to="/privacy" className="col-9 text-left click">Privacy Policy</Link>
          </li>
          {log}
        </ul>
      </div>
      
      <div>
        <Switch>
          <Route path="/game/:id" render={() => <GameDetail matches={matches} maps={maps} teams={teams}/>}></Route>
          <Route path="/login" render={() => <Login users={users}/>}></Route>
          <Route path="/options" component={Options}></Route>
          <Route path="/schedule" render={() => <Schedule matches={matches} maps={maps} teams={teams}/>}></Route>
          <Route path="/stadiums" render={() => <Stadiums maps={maps}/>}></Route>
          <Route path="/stats" component={Stats}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/privacy" component={Privacy}></Route>
          <Route path="/" exact render={() => <Home matches={matches} teams={teams}/>}></Route>
        </Switch>
      </div>
    
    
    </div>
  )
}


export default withFirebaseAuth({
	firebaseAppAuth,
})(SlideMenu);