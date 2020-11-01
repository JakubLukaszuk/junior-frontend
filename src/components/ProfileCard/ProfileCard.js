import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
    const {userName, imageUrl} = props;
    return (
        <div className = {['ProfileCard', 'wrapper'].join(' ')}>
            <span className = {['ProfileCard', 'name'].join(' ')}>{userName}</span>
            <img className = {['ProfileCard', 'avatar'].join(' ')} src={imageUrl} alt="profile avatar"></img>
        </div>
    )
}

export default ProfileCard;