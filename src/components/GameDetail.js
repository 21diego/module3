import React,{useState, useEffect} from 'react';
import '../assets/css/GameBox.css';
import { useParams} from 'react-router-dom';

import Comments from './Comments'

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

function GameDetail(props){
  let { id } = useParams();
  let match = props.matches[parseInt(id) - 1]
  
  let srcMap = props.maps.filter(m => m.name === match.location);
  let source = srcMap[0]? srcMap[0].link:null;
  return (
    match !== undefined
    ? <div className="Game box">
        {getTeams(props.teams, match.team1, match.team2)}
        <div className="d-flex justify-content-around">
          <div className="time">Date: {match.date}</div>
          <div className="time">Time: {match.time ? match.time.replace(/_/gi," "):null}</div>
        </div>
        <div className="location">Stadium: {match.location ? match.location.replace(/_/gi," "):null}</div>
        <div className="location">Address: {srcMap[0]? srcMap[0].location.replace(/_/gi," "):null}</div>
        <iframe title="myFrame" className="map" src={source}></iframe>
        <div className="team">Chat</div>
        <div>
          <Comments id={(match.gameId)}/>
        </div>
      </div>
    : null
  )
}

export default GameDetail;