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
    <div className="Header">
      <div className="row d-flex align-items-center">
        <Menu/>
        <div id="title" className="col-4"><h2>NYSL</h2></div>
        {element}
      </div>
      <div className="container box">
        <h3 className="title">{props.title}</h3>
      </div>
      <SlideMenu />
    </div>
    
  )
}

export default Header;