import React from 'react';
import '../assets/css/Login.css';
import {Link} from 'react-router-dom';


function Login(){

	return (
		<div className="container">
			<div className="titles mt-3 mb-3">Please login with...</div>
			<div id="buttons" className="row p-0 m-0">
				<div className="col-4">
					<a href="/" className="btnf btn btn-lg btn-block" data-toggle="tooltip" data-placement="top" title="Facebook">
						<i className="fab fa-facebook-f fa-2x"></i>
						<span className="hidden-xs"></span>
					</a>
				</div>
				<div className="col-4">
					<a href="/" className="btnt btn btn-lg btn-block kpx_btn-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
						<i className="fab fa-twitter fa-2x"></i>
						<span className="hidden-xs"></span>
					</a>
				</div>  
				<div className="col-4">
					<a href="/" className="btng btn btn-lg btn-block kpx_btn-google-plus" data-toggle="tooltip" data-placement="top" title="Google Plus">
						<i className="fab fa-google fa-2x"></i>
						<span className="hidden-xs"></span>
					</a>
				</div>  
    	</div>
			<div className="titles mt-3">... or ...</div>
			<form className="m-0">
				<div className="container">
					<div className="form-group m-0">
    			<label htmlFor="email"></label>
    			<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
  			</div>
  			<div className="form-group m-0">
    			<label htmlFor="password"></label>
    			<input type="password" className="form-control" id="password" placeholder="Password" />
  			</div>
  			<button type="submit" className="btn btn-primary mt-4">Log In</button>
				</div>
				<div className="titles mt-3">You have not yet registered?</div>
  			<div className="container">
					<Link to='/register'><button type="submit" className="btn btn-primary mt-4">Register</button></Link>
				</div>
			</form>
			
		 </div>
	)

}

export default Login;