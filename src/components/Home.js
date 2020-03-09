import React, {useState, useEffect} from 'react';
import '../assets/css/Home.css';
import {db} from '../firebase'

// COMPONENTES
import Header from './Header';

function Home(){
  return (
    <div>
      <Header title="Upcoming Events"/>
      <div id="matches">
        
      </div>
    </div>
  )

}

export default Home;