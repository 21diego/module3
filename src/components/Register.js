import React from 'react';
import '../assets/css/Register.css';
import {Link, useHistory} from 'react-router-dom';
import * as firebase from 'firebase/app';
import {db} from "./../firebase"

let history = '';
async function createUserDB(name,email,photo){
	let newKey = db.ref(`users/`).push().key
	let user = {}
	user[`users/${newKey}`] = {
 		'name': name,
 		'email': email,
 		'photoURL':photo
	 }
	db.ref().update(user)
 }

const handleSignUp = async event => {
	event.preventDefault();
	const {name, email, password } = event.target.elements;
	try {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email.value, password.value)
			.then(data =>{
				data.user.updateProfile({
					displayName: name.value,
					photoURL: "https://i.ibb.co/f08MyQK/user.png"
					});
				createUserDB(name.value, email.value,data.user.photoURL);
				alert("You have successfully registered!")
			})
		history.push("/");
		window.location.reload();
	} catch (error) {
		alert(error);
	}
};

function Register(){
	history = useHistory();
  return (
    <div className="container">
      <div className="titles mt-3">Please complete the information:</div>
      <form className="m-0 container" onSubmit={handleSignUp}>
				<div className="container">
          <div className="form-group m-0">
    			  <label htmlFor="name"></label>
    			  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your full name" />
  			  </div>
					<div className="form-group m-0">
    			  <label htmlFor="email"></label>
    			  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
  			  </div>
  			  <div className="form-group m-0">
    			  <label htmlFor="password"></label>
    			  <input type="password" className="form-control" id="password" placeholder="Write a password" />
  			  </div>
          <button type="submit" className="btn btn-green mt-4">Register</button>
        </div>
        <div className="titles mt-3">Do you have an account?</div>
        <div className="container">
          <Link to='/login'><button type="submit" className="btn btn-green mt-4">Login</button></Link>
        </div>
			</form>
    </div>
  )
}


export default Register;