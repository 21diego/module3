import React from 'react';
import '../assets/css/Login.css';
import {Link,useHistory} from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import {db} from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),
	facebookProvider : new firebase.auth.FacebookAuthProvider(),
	twitterProvider : new firebase.auth.TwitterAuthProvider()
};


let history='';
const handleSignIn = async event => {
	event.preventDefault();
	const { email, password } = event.target.elements;
	try {
		await firebase
			.auth()
			.signInWithEmailAndPassword(email.value, password.value)
			.then(data => {
				window.localStorage.setItem('username',data.user.displayName);
				window.localStorage.setItem('email',data.user.email);
				alert("You successfully logged in!")
			});
			history.push("/");
			window.location.reload();
	} catch (error) {
		alert(error);
	}
};

function verifyUser(user, usersDB){
	let ok = false;
	for(let u in usersDB) {
		if(usersDB[u].email === user.email){ok = true}
	}
	return ok;
}

async function createUserDB(userData){
		let newKey = db.ref(`users/`).push().key
		let user = {}
		user[`users/${newKey}`] = {
 			'name': userData.displayName,
 			'email': userData.email,
 			'photoURL':userData.photoURL
	 	}
		db.ref().update(user);
	
}
	
function Login(props){
	
	history = useHistory();
	const {signInWithGoogle, signInWithTwitter } = props;
	
	function loginGoogle(){
		signInWithGoogle().then((data)=>{
			if(!verifyUser(data.user, props.users)){createUserDB(data.user);}
			window.localStorage.setItem('username',data.user.displayName);
			window.localStorage.setItem('email',data.user.email);
			alert("You successfully logged in!")
			history.push("/");
			window.location.reload();
		})
	}
	function loginTwitter(){
		signInWithTwitter().then((data)=>{
			if(!verifyUser(data.user, props.users)){createUserDB(data.user);}
			window.localStorage.setItem('username',data.user.displayName);
			window.localStorage.setItem('email',data.user.email);
			alert("You successfully logged in!")
			history.push("/");
			window.location.reload();
		})
	}

	
	return (
		<div className="container">
			<div className="titles mt-3 mb-3">Please login with...</div>
			<div id="buttons" className="row p-0 m-0">
				{/* <div className="col-4">
					<button onClick={signInWithFacebook} className="btnf btn btn-lg btn-block" data-toggle="tooltip" data-placement="top" title="Facebook">
						<i className="fab fa-facebook-f fa-2x"></i>
						<span className="hidden-xs"></span>
					</button>
				</div> */}
				<div className="col-6">
					<button onClick={loginTwitter} className="btnt btn btn-lg btn-block kpx_btn-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
						<i className="fab fa-twitter fa-2x"></i>
						<span className="hidden-xs"></span>
					</button>
				</div>  
				<div className="col-6">
					<button onClick={loginGoogle} className="btng btn btn-lg btn-block kpx_btn-google-plus" data-toggle="tooltip" data-placement="top" title="Google Plus">
						<i className="fab fa-google fa-2x"></i>
						<span className="hidden-xs"></span>
					</button>
				</div>  
    	</div>
			<div className="titles mt-3">... or use ...</div>
			<form id="login" className="m-0" onSubmit={handleSignIn}>
				<div className="container">
					<div className="form-group m-0">
    			<label htmlFor="email"></label>
    			<input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
  			</div>
  			<div className="form-group m-0">
    			<label htmlFor="password"></label>
    			<input type="password" className="form-control" id="password" name="pass" placeholder="Password" />
  			</div>
  			<button type="submit" value="hola" name="hola" className="btn btn-green mt-4">Log In</button>
				</div>
				<div className="titles mt-3">You have not yet registered?</div>
  			<div className="container">
					<Link to='/register'><button type="submit" className="btn btn-green mt-4">Register</button></Link>
				</div>
			</form>
		 </div>
	)

}

export default withFirebaseAuth({
	providers,
	firebaseAppAuth,
})(Login);
