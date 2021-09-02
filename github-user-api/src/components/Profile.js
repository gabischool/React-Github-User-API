

import React from "react"





function Profile(props) {

 console.log(props.profilles.name);
 
  return (
    <>
    
      <div className="profilles">

            <img src={props.profilles.avatar_url }
                alt={props.profilles.name } />

        <div className="list">

            <h3> Name: {props.profilles.name }</h3>
              <h3> location: {props.profilles.location }</h3>
              <h3> followers: {props.profilles.followers }</h3>
              <h3> following: {props.profilles.following }</h3>
              <h3> bio: {props.profilles.bio }</h3>

        </div>
      </div>




    </>
  )
}

export default Profile;