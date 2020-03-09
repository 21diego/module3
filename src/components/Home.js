import React, {useState, useEffect} from 'react';
import '../assets/css/Home.css';
import {db} from '../firebase'

// COMPONENTES
import Header from './Header';
import GameBox from './GameBox';

function Home(){
  const [schedule, setSchedule] = useState([])
  
    useEffect(() =>{ //Database bringer
      async function loadDatabase(){
        await db.ref('schedule/').once('value')
        .then(function(response){
            setSchedule(response.val())
        })
      }
      loadDatabase();
    },[])
  return (
    <div>
      <Header title="Upcoming Events"/>
      <div id="matches">
        {schedule.map((m,i )=> {
          return (
          <GameBox match={m} key={i} />
          );
        })}
      </div>
    </div>
  )

}

export default Home;