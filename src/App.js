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
    window.localStorage.setItem('email',user.email);
    window.localStorage.setItem('username',user.displayName);
    
  }
  else {
    window.localStorage.setItem('user',false);
    window.localStorage.setItem('email',null);
    window.localStorage.setItem('username',null);
}
  
  return (
    <div className="App">
      <div className="back"></div>
      <div className="gradient"></div>
      <Header title="Upcoming Events"/>
      
    </div>
    
    );
  }
  
  export default withFirebaseAuth({
    firebaseAppAuth,
  })(App);
  
  