import React from 'react';
import {db} from './../firebase'
import {useHistory} from 'react-router-dom';


let history;
function send(event){
  event.preventDefault();
  const {name, email, textarea } = event.target.elements;
  var today = new Date();
  let date = (today.getFullYear()+"-"+(today.getMonth()+1)+'-'+("0" + today.getDate()).slice(-2))
  
  let newKey = db.ref(`contact/`).push().key
  let update = {}
  update[`contact/${newKey}`] = {
    username: name.value,
    email: email.value,
    comment: textarea.value,
    date: date
  }
  db.ref().update(update).then(() => {
    alert("Your message was sent successfull")
    history.push('/');
  }).catch(() => {})

}


function Contact () {
  history = useHistory();
  return (
    <div className="container-fluid">
      <div className="box">CONTACT ME</div>
      <form className="m-0 container" onSubmit={send}>
				<div className="container">
          <div className="form-group m-0">
    			  <label htmlFor="name"></label>
    			  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your full name" />
  			  </div>
					<div className="form-group m-0">
    			  <label htmlFor="email"></label>
    			  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
  			  </div>
  			  <div className="form-group m-0">
    			  <label htmlFor="textarea"></label>
    			  <textarea className="form-control" id="textarea" rows="3" placeholder="Write..." />
  			  </div>
          <button type="submit" className="btn btn-green mt-4">Send</button>
        </div>
			</form>
    </div>
  )
}

export default Contact;