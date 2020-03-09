import React from 'react';
import '../assets/css/Menu.css';
import pelota from '../assets/img/nysl_logo.png'
import $ from 'jquery';


function Menu(){
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#pelota').toggleClass('pelotita-open');
        $('.Menu').toggleClass('col-10');
        $('.Menu').toggleClass('box-contain-open');
        $('#title').toggleClass('col-8');
        $('#title').toggleClass('align-self-center');
        $('.overlay').addClass('active');
    });
    $('.overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });
  });
  
  return (
    
    <div className="Menu col-4">
      <div className="box-contain">
        <button type="button" className="btn" id="sidebarCollapse"><i className="fas fa-bars"></i></button>
      </div>
      <img id="pelota" className="pelotita" src={pelota} alt="pelotita"></img>
    </div>
    
    
  )
}

export default Menu;