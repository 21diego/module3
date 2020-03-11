import React, {useState, useEffect} from 'react';
import '../assets/css/Schedule.css';
import {db} from '../firebase';
import { Link } from 'react-router-dom';

// COMPONENTES
import GameBox from './GameBox';

window.addEventListener("orientationchange", function() {
  this.window.location.reload()
}, false);

async function landscape (matchInfo) {
  let matchMap
  await db.ref('stadiums/').once('value')
    .then(function(response){
        matchMap = response.val()
    })
  let srcMap = matchMap.filter(m => m.name === matchInfo.location);
  document.getElementById("match").innerHTML =
   `<div class="Game box">
      <div class="d-flex justify-content-around ">
        <h3 class="team">${matchInfo.team1}</h3>
        <p class="team">vs</p>
        <h3 class="team">${matchInfo.team2}</h3>
      </div>
      <div class="time">Day: ${matchInfo.date}</div>
      <div class="time">Time: ${matchInfo.time.replace(/_/gi," ")}</div>
      <div class="location">Stadium: ${matchInfo.location.replace(/_/gi," ")}</div>
      <div class="location">Address: ${srcMap[0]? srcMap[0].location.replace(/_/gi," "):null}</div>
      <iframe class="map" src=${srcMap[0]? srcMap[0].link:null}></iframe>
    </div>`
}

function Schedule(){

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
      <div className="container-fluid">
        <div className="box">
				  <h3 className="title">Schedule</h3>
			  </div>
        <div className="row">
          {schedule.length 
          ? window.matchMedia("(orientation: portrait)").matches
            ?  <div id="matches" className="col-12">
                {schedule.map((m,i )=> {
                  return (
                      <Link to={'/game/' + m.gameId} key={m.gameId}>
                        <GameBox match={m} key={i} />
                      </Link>
                  );
                })}
              </div>
            : window.matchMedia("(orientation: landscape)").matches
              ? <>
                  <div id="matches" className="col-5">
                    {schedule.map((m,i )=> {
                      return (
                        <div onClick={() => landscape(m)} key={m.gameId}>
                          <GameBox match={m} key={i}/>
                        </div>
                      );
                    })}
                  </div>
                  <div id="match" className="col-7 sticky-top" key="col2">
                    <p className="team box">Please click in a game of the shcedule and his details will
                      charge here! Thanks!</p>
                  </div>
                </>
              : alert("Screen error")
          : null}
        </div>
      </div>
  )
}

export default Schedule;