import React, {useState,useEffect} from 'react';
import {db} from '../firebase';
import '../assets/css/Stats.css'

function getPoints(team){
  return parseInt(team.wins)*3 + parseInt(team.ties);
}


function Stats(){
  const [teams, setTeams] = useState([])
  
  useEffect(() =>{ //Database bringer
    async function loadDatabase(){
      await db.ref('/').once('value')
      .then(function(response){
          setTeams(response.val().teams)
      })
    }
    loadDatabase();
  },[])
  return (
    <div id="table" className="container-fluid">
      <div className="box">
			    <h3 className="title">Leaderboard</h3>
			</div>
      <div className="container-fluid box">
        <div className="row">
          <h6 className="col-6">Team</h6>
          <p className="col-1">W</p>
          <p className="col-1">L</p>
          <p className="col-1">T</p>
          <p className="col-2">P</p>
        </div>
        {teams.length ? 
        teams.sort(function (a,b) {
          return getPoints(b) - getPoints(a)
        }).map((t,i)=>{
          return (
            <div className="row high border-top border-white" key={i}>
              <img id="shield-table" className="col-2" src={t.shield} alt="shield"></img>
              <h6 className="col-4 full">{t.name}</h6>
              <p className="col-4 small">{t.acronym}</p>
              <p className="col-1">{t.wins}</p>
              <p className="col-1">{t.loss}</p>
              <p className="col-1">{t.ties}</p>
              <p className="col-2">{getPoints(t)}</p>
            </div>
          )
        })
      : null}
      </div>
    </div>
  )

}

export default Stats;