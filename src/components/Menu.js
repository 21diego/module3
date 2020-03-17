import React from 'react';
import '../assets/css/Menu.css';
import pelota from '../assets/img/nysl_logo.png'
import $ from 'jquery';


function Menu(){
  $(document).ready(function () {
    $('#sidebarCollapse, .click').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#pelota').toggleClass('pelotita-open');
        $('.Menu').toggleClass('col-9');
        $('.Menu').toggleClass('box-contain-open');
        $('.Menu').toggleClass('position-fixed');
        $('#title').toggleClass('col-8');
        $('#title').toggleClass('align-self-center');
        $('.overlay').addClass('active');
    });
    $('#sidebar li').on('click', function(){
      $('#sidebar li').removeClass('active');
    });
    
  });
  
  return (
    
    <div className="Menu col-4 pl-0">
      <div className="box-contain w-80 " id="sidebarCollapse">
        <button type="button" className="btn" ><i className="fas fa-bars"></i></button>
      </div>
      <img id="pelota" className="pelotita" src={pelota} alt="pelotita"></img>
    </div>
    
    
  )
}

export default Menu;