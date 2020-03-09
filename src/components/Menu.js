import React from 'react';
import '../assets/css/Menu.css';
import pelota from '../assets/img/nysl_logo.png'



function Menu(props){
  
  return (
    
    <div className="Menu col-4">
      <div className="box-contain">
      <i className="fas fa-bars"></i>
      </div>
      <img id="pelotita" src={pelota} alt="pelotita"></img>
    </div>
    
  )
}

export default Menu;