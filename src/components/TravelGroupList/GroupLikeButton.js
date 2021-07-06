import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const GroupLikeButton = ({ group }) => {
    const { loggedInUser, setLoggedInUser, groupList, setGroupList } = useContext(UserContext);
    const groupId = group._id;
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(loggedInUser.liked_groups.find(group => group === groupId)) 
            setIsLiked(true);
    }, [loggedInUser, groupId]);
    
    const handleLike = () => {
        const currentLikedGroups = loggedInUser.liked_groups;
        let newLikedGroups = [];
        const changedGroupInfo = {...group};
        const modifiedGroupList = [...groupList];
        let likeIncrement;

        if(currentLikedGroups.includes(groupId)) {
            newLikedGroups = currentLikedGroups.filter(destination => destination !== groupId);
            setIsLiked(false);   

            likeIncrement = -1;
            changedGroupInfo.like_count -= 1;
        }
        else {
            newLikedGroups = [...currentLikedGroups, groupId];
            setIsLiked(true);

            likeIncrement = 1;
            changedGroupInfo.like_count += 1;
        }

        for(let i = 0; i < modifiedGroupList.length; i++) {
            if(modifiedGroupList[i]._id === changedGroupInfo._id) {
                modifiedGroupList[i] = changedGroupInfo;
                break;
            }
        }
        // setDestination(changedGroupInfo);
        setGroupList(modifiedGroupList);

        const newUserInfo = {...loggedInUser};
        newUserInfo.liked_groups = newLikedGroups;
        setLoggedInUser(newUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      

        fetch('http://localhost:5000/updateLikedGroup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email, likedGroups: newLikedGroups, groupId, likeIncrement})
        });
    };

    return (
        <>
            <FontAwesomeIcon style={{fontSize: '1.3em', color: "grey"}} icon={faThumbsUp} /> {Number(group.like_count)}
            {
                isLiked
                ?
                    <button onClick={handleLike} className="btn btn-sm btn-secondary ml-3">Unlike</button>
                :
                    <button onClick={handleLike} className="btn btn-sm btn-outline-secondary ml-3">Like</button>
            }
        </>
    );
};

export default GroupLikeButton;