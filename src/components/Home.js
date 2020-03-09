import React, {useState, useEffect} from 'react';
import '../assets/css/Home.css';
import {db} from '../firebase';
import { Link } from 'react-router-dom';

// COMPONENTES

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
      
      <div id="matches">
        {schedule.map((m,i )=> {
          return (
            <Link to={'/' + m.gameId} key={m.gameId}>
              <GameBox match={m} key={i} />
            </Link>
          );
        })}
      </div>
    </div>
  )

}

export default Home;