import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const DestinationLikeButton = ({ destination, setDestination }) => {
    const { destinationList, setDestinationList, loggedInUser, setLoggedInUser } = useContext(UserContext);
    const destinationId = destination._id;
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(loggedInUser.liked_destinations.find(destination => destination === destinationId)) 
            setIsLiked(true);
    }, [loggedInUser, destinationId]);

    const handleLike = () => {
        const currentLikedDestinations = loggedInUser.liked_destinations;
        let newLikedDestinations = [];
        const changedDestinationInfo = {...destination};
        const modifiedDestinationList = [...destinationList];
        let likeIncrement;

        if(currentLikedDestinations.includes(destinationId)) {
            newLikedDestinations = currentLikedDestinations.filter(destination => destination !== destinationId);
            setIsLiked(false);   

            likeIncrement = -1;
            changedDestinationInfo.like_count -= 1;
        }
        else {
            newLikedDestinations = [...currentLikedDestinations, destinationId];
            setIsLiked(true);

            likeIncrement = 1;
            changedDestinationInfo.like_count += 1;
        }

        for(let i = 0; i < modifiedDestinationList.length; i++) {
            if(modifiedDestinationList[i]._id === changedDestinationInfo._id) {
                modifiedDestinationList[i] = changedDestinationInfo;
                break;
            }
        }
        setDestination(changedDestinationInfo);
        setDestinationList(modifiedDestinationList);

        const newUserInfo = {...loggedInUser};
        newUserInfo.liked_destinations = newLikedDestinations;
        setLoggedInUser(newUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      

        fetch('http://localhost:5000/updateLikedDestination', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email, likedDestinations: newLikedDestinations, destinationId, likeIncrement})
        });
    };

    return (
        <>
            {
                isLiked
                ?
                    <button onClick={handleLike} className="btn btn-success mr-2 mt-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Liked
                    </button>
                :
                    <button onClick={handleLike} className="btn mr-2 mt-2 darkOliveGreen">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Like
                    </button>
            }
        </>
    );
};

export default DestinationLikeButton;