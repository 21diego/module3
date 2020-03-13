import React from 'react';
import './assets/css/App.css';


/*COMPONENTES*/
import Header from './components/Header'

function App() {
  if(window.localStorage.getItem('user')== false){
    window.localStorage.setItem('user',null);
  }
  return (
    <div className="App">
      <Header title="Upcoming Events"/>
    </div>
    
    );
  }
  
  export default App;
  