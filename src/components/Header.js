import React from 'react';
import '../assets/css/Header.css';

// COMPONENTES
import Menu from './Menu';
import SlideMenu from './SlideMenu'


function Header(props){
  
  return (
    <div className="Header m-0">
      
      <div className="row d-flex align-items-center p-0 m-0">
        
        <Menu/>
        <div id="title" className="col-4"><h2>NYSL</h2></div>
        <div className="col-4"></div>
        
      </div>
      <SlideMenu />
      
    </div>
    
  )
}

export default Header;