import React from 'react';
import '../assets/css/LoginBtn.css';
import { Link } from 'react-router-dom' ;

// COMPONENTES

function LoginBtn(){
  return (
    <div className="col-4">
      <div className="box-contain-reverse">
        <Link to='/login'><button>Log In</button></Link>
      </div>
    </div>
  )
}

export default LoginBtn;