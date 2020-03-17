import React, {useState} from 'react';
import '../assets/css/Schedule.css';
import { Link } from 'react-router-dom';

// COMPONENTES
import GameBox from './GameBox';
import Comments from './Comments';

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
      <div className="container-fluid">
        <div className="box">
				  <h3 className="title">Schedule</h3>
			  </div>
        <div className="row">
          {props.matches.length 
          ? window.matchMedia("(orientation: portrait)").matches
            ?  <div id="matches" className="col-12">
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
                  <div id="match" className="col-7 sticky-top" key="col2">
                  {M.date
                    ?  <div className="Game box">
                        <div className="d-flex justify-content-around ">
                          <h3 className="team">{M.team1}</h3>
                          <p className="team">vs</p>
                          <h3 className="team">{M.team2}</h3>
                        </div>
                        <div className="time">Date: {M.date}</div>
                        <div className="time">Time: {M.time ? M.time.replace(/_/gi," "):null}</div>
                        <div className="location">Stadium: {M.location ? M.location.replace(/_/gi," "):null}</div>
                        <iframe title="myFrame" className="map" src={source}></iframe>
                        <div className="team">Chat</div>
                        <div>
                          <Comments id={(M.gameId)}/>
                        </div>
                      </div>
                    :  <p className="text-danger">Please click a game and it will charge here!</p>
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