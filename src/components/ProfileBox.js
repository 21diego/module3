import React from 'react';
import '../assets/css/ProfileBox.css';


// COMPONENTES

function ProfileBox(props){
  let user = props.user;
  return(
    <div className="profile container mt-3">
      
        <img id="avatar" className="" src={user.photoURL} alt="user avatar"></img>
        <p id="nameid" className="">{user.displayName}</p>
      
      
      {/* <div className="row"> 
        {user.club ? 
          <div>
            <p className="col-8">{user.club.name}</p>
            <img id="club" className="col-4" src={user.club.photo} alt="club pic"></img>
          </div>
          :
          <p className="col"> >Add club in options.</p>
        }
      </div>
      <div>
        <Link to='/options'>Options</Link>
      </div>
      <div>

      </div> */}
    </div>
  )
}

export default ProfileBox;