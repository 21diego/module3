import React, {useState, useEffect} from 'react';
import '../assets/css/GameBox.css';

function getTeams(teams, team1, team2){
  let teamsAux = [];
  teams.forEach(t => {
    if(t.name === team1 || t.name === team2){
      teamsAux.push(t);
    }
  });
  if(teamsAux.length){
    return (
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <img id="shield" src={teamsAux[0].shield} alt={teamsAux[0].name}></img>
            <div className="full">{teamsAux[0].name}</div>
            <div className="small">{teamsAux[0].acronym}</div>
          </div>
          <div>
            <img id="versus" src="https://i.ya-webdesign.com/images/versus-logo-png-4.png" alt="versus"></img>
          </div>
          <div>
            <img id="shield" src={teamsAux[1].shield} alt={teamsAux[0].name}></img>
            <div className="full">{teamsAux[1].name}</div>
            <div className="small">{teamsAux[1].acronym}</div>
          </div>
          
          
          
      </div>)
  }
  
}

function GameBox(props){
  
  return (
    <div className="Game box">
      {getTeams(props.teams, props.match.team1,props.match.team2)}
      <div className="d-flex container justify-content-around">
        <div className="team">{props.match.date}</div>
        <div className="time">{props.match.time.replace(/_/gi," ")}</div>
      </div>
      <div className="location">{props.match.location.replace(/_/gi," ")}</div>
    </div>
  )
}

export default GameBox;