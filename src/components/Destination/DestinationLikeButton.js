import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const DestinationLikeButton = ({ destinationId }) => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(loggedInUser.liked_destinations.find(destination => destination === destinationId)) 
            setIsLiked(true);
    }, [loggedInUser, destinationId]);

    const handleLike = () => {
        const currentLikedDestinations = loggedInUser.liked_destinations;
        let newLikedDestinations = [];

        if(currentLikedDestinations.includes(destinationId)) {
            newLikedDestinations = currentLikedDestinations.filter(destination => destination !== destinationId);
            setIsLiked(false);   
        }
        else {
            newLikedDestinations = [...currentLikedDestinations, destinationId];
            setIsLiked(true);
        }

        const newUserInfo = loggedInUser;
        newUserInfo.liked_destinations = newLikedDestinations;
        setLoggedInUser(newUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      

        fetch('http://localhost:5000/updateUserLikedDestination', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email, likedDestinations: newLikedDestinations})
        });
    };

    return (
        <>
            {
                isLiked
                ?
                    <button onClick={handleLike} className="btn mr-2 mt-2 darkOliveGreen">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Like
                    </button>
                :
                    <button onClick={handleLike} className="btn btn-success mr-2 mt-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Liked
                    </button>
            }
        </>
    );
};

export default DestinationLikeButton;