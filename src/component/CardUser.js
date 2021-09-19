import React from "react";
import '../App.css'
const CardUser = props => {
 
    const {user } =props
    const {teacher } =props
 
    return(
        <div>

            {/* teacher Card  */}
            <div className='card'>
                <div  className='card__hero'>
                    <img src={teacher.avatar_url} alt='profile' className='card__img'/>
                </div>

                <div className='cord__content'>
                    <h3>{teacher.name}</h3>
                <p>{teacher.login}</p>

                    <div className='card__detail'>
                        <p><b>Company</b> : {teacher.company}</p>
                        <p><b>location</b>: {teacher.location}</p>
                        <p><b>Followers</b> : {teacher.followers}</p>
                        <p><b>Following</b> : {teacher.following}</p>
                        <p><b>Bio</b> : {teacher.bio}</p>
                    </div>
                </div>
            </div>

        {/* me card  */}
            <div className='card'>
                <div  className='card__hero'>
                    <img src={user.avatar_url} alt='profile' className='card__img'/>
                </div>

                <div className='cord__content'>
                    <h3>{user.name}</h3>
                    <p>{user.login}</p>

                    <div className='card__detail'>
                        <p><b>Company</b> : {user.company}</p>
                        <p><b>location</b>: {user.location}</p>
                        <p><b>Followers</b> : {user.followers}</p>
                        <p><b>Following</b> : {user.following}</p>
                        <p><b>Bio</b> : {user.bio}</p>
                    </div>
                </div>
            </div>

        </div>

    )
} 


export default CardUser;