import React,{useState, useEffect} from 'react';
import '../assets/css/GameBox.css';
import { useParams} from 'react-router-dom';
import { db } from '../firebase';

import Comments from './Comments'

function GameDetail(){
  const [match, setMatch] = useState([]);
  const [map, setMap] = useState([]);
  let { id } = useParams();
  let refMatch = 'schedule/' + (parseInt(id)-1);
  useEffect(() =>{ //Database bringer
    async function loadMatch(){
      await db.ref(refMatch).once('value')
      .then(function(response){
          setMatch(response.val())
      })
    }
    loadMatch();
  },[refMatch])
  useEffect(() =>{ //Database bringer
    async function loadMaps(){
      await db.ref('stadiums/').once('value')
      .then(function(response){
          setMap(response.val())
      })
    }
    loadMaps();
    
  },[])
  let srcMap = map.filter(m => m.name === match.location);
  let source = srcMap[0]? srcMap[0].link:null;
  return (
    match !== undefined
    ? <div className="Game box">
        <div className="d-flex justify-content-around ">
          <h3 className="team">{match.team1}</h3>
          <p className="team">vs</p>
          <h3 className="team">{match.team2}</h3>
        </div>
        <div className="time">Date: {match.date}</div>
        <div className="time">Time: {match.time ? match.time.replace(/_/gi," "):null}</div>
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