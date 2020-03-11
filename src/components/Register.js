import React from 'react';
import '../assets/css/Register.css';
import {Link} from 'react-router-dom';


function Register(){
  return (
    <div className="container">
      <div className="titles mt-3">Please complete the information:</div>
      <form className="m-0 container">
				<div className="container">
          <div className="form-group m-0">
    			  <label htmlFor="firstname"></label>
    			  <input type="email" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter your first name" />
  			  </div>
          <div className="form-group m-0">
    			  <label htmlFor="lastname"></label>
    			  <input type="email" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter your last name" />
  			  </div>
					<div className="form-group m-0">
    			  <label htmlFor="email"></label>
    			  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
  			  </div>
  			  <div className="form-group m-0">
    			  <label htmlFor="password"></label>
    			  <input type="password" className="form-control" id="password" placeholder="Write a password" />
  			  </div>
          <button type="submit" className="btn btn-primary mt-4">Register</button>
        </div>
        <div className="titles mt-3">Do you have an account?</div>
        <div className="container">
          <Link to='/login'><button type="submit" className="btn btn-primary mt-4">Login</button></Link>
        </div>
			</form>
    </div>
  )
}

export default Register;