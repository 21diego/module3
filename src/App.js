import React from 'react';
import './assets/css/App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';



/*COMPONENTES*/
import Header from './components/Header'
const firebaseAppAuth = firebase.auth();
 
function App(props) {
  const {user} = props;
  if(user){
    window.localStorage.setItem('user',true);
    
  }
	else {window.localStorage.setItem('user',false);}
  
  return (
    <div className="App">
      <Header title="Upcoming Events"/>
    </div>
    
    );
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(App);
  
  