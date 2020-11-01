import React, {useEffect, useState} from 'react';

import {getUserAsync} from '../../data/providers/userProvider';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import {getErrorMessage} from '../../utils/error';

import './MyProfile.css'

const MyProfile = () => {
    const [user, setUser] = useState({
        name: "",
        avatarUrl: ""
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const userName = "JakubLukaszuk";

    useEffect(() => {
        const userData = getUserAsync(userName)
        .catch(error =>{
            setError(error);
            setIsLoading(false);
          })
          setTimeout(() => {
            userData.then(user => {
                if(!error && user)
                {
                    const userToSet = {
                        name: user.name,
                        avatarUrl: user.avatar_url
                    }
                    setUser(userToSet)
                }
                setIsLoading(false);
              })
           }, 800);
    }, [error,user,isLoading])

    return (
        <div className = {['MyProfile', 'wrapper'].join(' ')}>
            {isLoading ? <Spinner/> :
                 error ? <span className = {['MyProfile', 'error'].join(' ')}>{getErrorMessage(error)}</span>
                 : <ProfileCard userName = {user.name} imageUrl = {user.avatarUrl}/>}
        </div>
    )
}

export default MyProfile