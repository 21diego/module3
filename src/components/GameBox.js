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
      <div className="time">{props.match.time}</div>
      <div className="location">{props.match.location}</div>
    </div>
  )
}

export default GameBox;