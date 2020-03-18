import React, {useState, useEffect} from 'react'
import {db} from './../firebase'
import '../assets/css/Comments.css'

function comment(matchId){
	var today = new Date();
	let date = (today.getFullYear()+"-"+(today.getMonth()+1)+'-'+("0" + today.getDate()).slice(-2))
	let input = document.getElementById('comment')
	let newKey = db.ref(`forum/${parseInt(matchId)}/${parseInt(matchId)}/`).push().key
	let update = {}
	update[`forum/${parseInt(matchId)}/${parseInt(matchId)}/${newKey}`] = {
		username: localStorage.getItem("username"),
		email: localStorage.getItem("email"),
		comment: input.value,
		date: date
	}
	
	db.ref().update(update)
}

function nada(){
	return null
}
function ExportQueExporta(props){
	
	const [comments, setComments] = useState([])
	
	useEffect(() =>{
		async function getComments(matchId){
			await db.ref(`forum/${matchId}/${matchId}`)
			.on('child_added', function(snapshot){               
				setComments(comments => [...comments, snapshot.val()])   					
			})}
			props.id!== undefined ? getComments(parseInt(props.id)-1) : nada()}
			,[props.id]) 
			
			return(
				<div>
				{window.localStorage.getItem('user') === "true"?
				<> 
				<div id="chat">
				{comments.length ?
					comments.map((comment, i) =>{
						return(
							<div key={i}>
								<p className="pl-1 text-left">{comment.username} say:</p>
								<div className="comment-box">
									<p className="pl-3 text-left">{comment.comment}</p>
									<p className="text-right pr-2">{comment.date}</p>
								</div>
								
							</div>
						)})
					: nada()}
					</div>
					<div>
						<form>
							<div className="container">
								<div className="form-group m-0">
    							<label htmlFor="comment"></label>
									<textarea className="form-control" id="comment" rows="3" placeholder="Write a comment..." />
  							</div>
								<div>
									<button onClick={() => comment(parseInt(props.id)-1)} className="btn btn-green mt-4">Comment</button>
								</div>
							</div>
						</form>
					</div>
					</>
					: nada()}
					</div>
			)
	}
						
export default ExportQueExporta;