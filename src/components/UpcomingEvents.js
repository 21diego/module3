import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import { Link } from 'react-router-dom';

import GameBox from './GameBox';

function Events(){
    var today = new Date();
    let date = (today.getMonth()+1)+'-'+("0" + today.getDate()).slice(-2);
    date = date.replace(/-/gi,"/")
    const [schedule, setSchedule] = useState([])

    useEffect(() =>{ //Database bringer
      async function loadDatabase(){
        await db.ref('schedule/').once('value')
        .then(function(response){
            setSchedule(response.val())
        })
      }
      loadDatabase();
    },[])
    let Upcoming
    schedule.length ? Upcoming = schedule.filter(e => (+ (e.date.replace("/",""))) > (+ (date.replace("/","")))) : console.log("asd")
    return(
        <div className="container-fluid">
            <div className="box">
			    <h3 className="title">Upcoming Events</h3>
			</div>
            {schedule.length
            ?   <div className="row">
                    <Link to={'/game/' + Upcoming[0].gameId} key={Upcoming[0].gameId} className="col-12">
                        <GameBox match={Upcoming[0]} key="Upcoming1" />
                    </Link>
                    <Link to={'/game/' + Upcoming[1].gameId} key={Upcoming[1].gameId} className="col-12">
                        <GameBox match={Upcoming[1]} key="Upcoming2" />
                    </Link>
                    <Link to={'/game/' + Upcoming[2].gameId} key={Upcoming[2].gameId} className="col-12">
                        <GameBox match={Upcoming[2]} key="Upcoming3" />
                    </Link>
                </div>
            : null}
        </div>
        )
}

export default Events;