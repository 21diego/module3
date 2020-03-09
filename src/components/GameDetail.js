import React,{useState, useEffect} from 'react';
import '../assets/css/GameBox.css';
import { useParams} from 'react-router-dom';
import { db } from '../firebase';

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
  },[])
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
  console.log(srcMap[0]);
  return (
    <div className="Game box">
      <div className="d-flex justify-content-around ">
        <h3 className="team">{match.team1}</h3>
        <p className="team">vs</p>
        <h3 className="team">{match.team2}</h3>
      </div>
      <div className="time">Time: {match.time}</div>
      <div className="location">Stadium: {match.location}</div>
      <div className="location">address: {srcMap[0]? srcMap[0].location:null}</div>
      <iframe className="map" src={srcMap[0]? srcMap[0].link:null}></iframe>

      
    </div>
  )
}

export default GameDetail;