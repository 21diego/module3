import React from 'react';
import {db} from '../firebase';
import { Link } from 'react-router-dom';

import GameBox from './GameBox';

function Events(props){
    var today = new Date();
    let date = (today.getMonth()+1)+'-'+("0" + today.getDate()).slice(-2);
    date = date.replace(/-/gi,"/")

    let Upcoming
    props.matches.length ? Upcoming = props.matches.filter(e => (+ (e.date.replace("/",""))) > (+ (date.replace("/","")))) : console.log("asd")
    return(
        <div className="container-fluid">
            
            {props.matches.length
            ?   <div className="row">
                    <Link to={'/game/' + Upcoming[0].gameId} key={Upcoming[0].gameId} className="col-12">
                        <GameBox match={Upcoming[0]} teams={props.teams} key="Upcoming1" />
                    </Link>
                    <Link to={'/game/' + Upcoming[1].gameId} key={Upcoming[1].gameId} className="col-12">
                        <GameBox match={Upcoming[1]} teams={props.teams} key="Upcoming2" />
                    </Link>
                    <Link to={'/game/' + Upcoming[2].gameId} key={Upcoming[2].gameId} className="col-12">
                        <GameBox match={Upcoming[2]} teams={props.teams} key="Upcoming3" />
                    </Link>
                </div>
            : null}
        </div>
        )
}

export default Events;