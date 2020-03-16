import React, {useState, useEffect} from 'react';
import {db} from '../firebase';

function Stadiums(props){
  return(
		<div className="locations container">
			<div className="box">
				<h3 className="title">Stadiums</h3>
			</div>
			{props.maps.length
			? props.maps.map((location,i) =>
				<div key={i} id="mapbox" className="box">
					<div className="Name"><p>Name: {location.name.replace(/_/gi," ")}</p></div>
					<div className="Addres"><p>Addres: {location.location.replace(/_/gi," ")}</p></div>
					<div className="map"><p>Map:</p>
					<iframe title="myFrame" className="map" src={location.link}></iframe>
				</div>
      </div>)
      :  null}
    </div>
	)
}

export default Stadiums;