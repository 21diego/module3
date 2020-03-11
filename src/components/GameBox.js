import React from 'react';
import '../assets/css/GameBox.css';

function GameBox(props){
  return (
    <div className="Game box">
      <div className="d-flex justify-content-around ">
        <h3 className="team">{props.match.team1}</h3>
        <p className="team">vs</p>
        <h3 className="team">{props.match.team2}</h3>
      </div>
      <div className="team">{props.match.date}</div>
      <div className="time">{props.match.time.replace(/_/gi," ")}</div>
      <div className="location">{props.match.location.replace(/_/gi," ")}</div>
    </div>
  )
}

export default GameBox;