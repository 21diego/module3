import React from 'react';
import '../assets/css/Header.css';

// COMPONENTES
import Menu from './Menu';
import SlideMenu from './SlideMenu'
import LoginBtn from './LoginBtn'


let user = false;

function Header(props){
  
  let element
  if(user){
    element = <Menu/>
  }else {
    element = <LoginBtn/>
  }
  return (
    <div className="Header m-0">
      
      <div className="row d-flex align-items-center p-0 m-0">
        
        <Menu/>
        <div id="title" className="col-4"><h2>NYSL</h2></div>
        {element}
      </div>
      <SlideMenu />
      
    </div>
    
  )
}

export default Header;