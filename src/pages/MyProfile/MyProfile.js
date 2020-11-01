import React, {useEffect, useState} from 'react';
import {getUserAsync} from '../../data/providers/userProvider';

const MyProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userData = getUserAsync("JakubLukaszuk")
        .catch(error =>{
            setIsLoading(false);
          })
          userData.then(user => {
            if(!error && userData)
            {
                setUser(user)
            }
            setIsLoading(false);
          })
    }, [])
    return (
        <div>
            My Profile
        </div>
    )
}

export default MyProfile