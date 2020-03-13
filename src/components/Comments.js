import React, {useState, useEffect} from 'react'
import {db} from './../firebase'

function comment(matchId){
    var today = new Date();
    let date = (today.getFullYear()+"-"+(today.getMonth()+1)+'-'+("0" + today.getDate()).slice(-2))
    let input = document.getElementById('comment')
    let newKey = db.ref(`forum/${parseInt(matchId)}/${parseInt(matchId)}/`).push().key
    let update = {}
    update[`forum/${parseInt(matchId)}/${parseInt(matchId)}/${newKey}`] = {
        /*uid: this.user.uid,
        username: this.user.displayName,
        email: this.user.email,*/
        comment: input.value,
        date: date
    }

    db.ref().update(update)

    //input.value = ""
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
            {window.localStorage.getItem('user') == "true"?
            <> 
            <div>
                <p className="text-danger">Comments!</p>
                {comments.length ?
                comments.map((comment, i) =>{
                    return(
                            <div key={i}>
                                {console.log(comments)}
                                <p className="text-danger">{comment.comment}</p>
                                <p className="text-danger">{comment.date}</p>
                            </div>
                        )}
                )
            : nada()}
            </div>
            <div>
                <p className="text-danger">Leave your comment here!</p>
                <form>
                <input type="text" id="comment" />
	            <button onClick={() => comment(parseInt(props.id)-1)}>Comment</button>
                </form>
            </div>
            </>
            : console.log("logueate cappo")}
        </div>
    )
}

export default ExportQueExporta;