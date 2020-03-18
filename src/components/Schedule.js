import React, {useState} from 'react';
import '../assets/css/Schedule.css';
import { Link } from 'react-router-dom';

// COMPONENTES
import GameBox from './GameBox';
import Comments from './Comments';

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
            <div className="full">{teamsAux[0].name.replace(/_/gi," ")}</div>
            <div className="small">{teamsAux[0].acronym}</div>
          </div>
          <div>
            <img id="versus" src="https://i.ya-webdesign.com/images/versus-logo-png-4.png" alt="versus"></img>
          </div>
          <div>
            <img id="shield" src={teamsAux[1].shield} alt={teamsAux[0].name}></img>
            <div className="full">{teamsAux[1].name.replace(/_/gi," ")}</div>
            <div className="small">{teamsAux[1].acronym}</div>
          </div>
      </div>)
  }

}

window.addEventListener("orientationchange", function() {
  this.window.location.reload()
}, false);

function landscape (matchInfo, settMatch, norepeat) {
  if((document.getElementById("chat") && !(norepeat===matchInfo.gameId))){
    document.getElementById("chat").innerHTML = ""
  }
  settMatch(matchInfo)
  return matchInfo.gameId
}

var noRepeatChat = 28

function Schedule(props){

  const [M, setM] = useState({"date":false})

  let srcMap = props.maps.filter(m => m.name === M.location);
  let source = srcMap[0]? srcMap[0].link:null;

  return (
      <div className="schedule container-fluid">
        <div className="box">
				  <h3 className="title">Schedule</h3>
			  </div>
        <div className="container-fluid wrapper">
          {props.matches.length 
          ? window.matchMedia("(orientation: portrait)").matches
            ?  <div id="matches">
                {props.matches.map((m,i )=> {
                  return (
                      <Link to={'/game/' + m.gameId} key={m.gameId}>
                        <GameBox match={m} teams={props.teams} key={i} />
                      </Link>
                  );
                })}
              </div>
            : window.matchMedia("(orientation: landscape)").matches
              ? <>
                  <div id="matches" className="col-5">
                    {props.matches.map((m,i )=> {
                      return (
                        <div onClick={() => landscape(m, setM, noRepeatChat)} key={m.gameId}>
                          <GameBox match={m} teams={props.teams} key={i}/>
                        </div>
                      );
                    })}
                  </div>
                  <div id="match" className="col-7" key="col2">
                  {M.date?
                    <div className="Game box">
                      {getTeams(props.teams, M.team1, M.team2)}
                      <div className="d-flex justify-content-around">
                        <div className="time">Date: {M.date}</div>
                        <div className="time">Time: {M.time ? M.time.replace(/_/gi," "):null}</div>
                      </div>
                      <div className="location">Stadium: {M.location ? M.location.replace(/_/gi," "):null}</div>
                      <div className="location">Address: {srcMap[0]? srcMap[0].location.replace(/_/gi," "):null}</div>
                      <iframe title="myFrame" className="map" src={source}></iframe>
                        <div className="team">Chat</div>
                        <div>
                          <Comments id={(M.gameId)}/>
                        </div>
                      </div>
                    :  <p className="box text-danger">Please click a game and it will charge here!</p>
                  }
                  </div>
                </>
              : alert("Screen error")
          : null}
        </div>
      </div>
  )
}

export default Schedule;