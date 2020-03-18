import React from 'react';
import '../assets/css/Header.css';

// COMPONENTES
import Menu from './Menu';
import SlideMenu from './SlideMenu'


function Header(props){
  
  return (
    <div className="Header m-0">
       <Menu/>
      <div id="header-box" className="row d-flex align-items-center p-0 m-0">
        <div className="back-h"></div>
        <div className="gradient-h"></div>
        <div id="title" className="col-12"><h2>NYSL</h2></div>
      </div>
      <SlideMenu />
      
    </div>
    
  )
}

export default Header;