import React from 'react';
import UpcomingEvents from './UpcomingEvents'




function Home(props){

	return (
		<div>
			<div className="box">
			    <h3 className="title">Upcoming Events</h3>
			</div>
			<UpcomingEvents matches={props.matches} teams={props.teams}/>
		</div>
	)
}

export default Home;