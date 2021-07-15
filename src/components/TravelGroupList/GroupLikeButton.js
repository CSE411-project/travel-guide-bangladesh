import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const GroupLikeButton = ({ group }) => {
    const { loggedInUser, loggedInUserDispatch, groupList, groupListDispatch } = useContext(UserContext);
    const groupId = group._id;
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(loggedInUser.info.liked_groups.find(group => group === groupId)) 
            setIsLiked(true);
    }, [loggedInUser, groupId]);
    
    const handleLike = () => {
        const currentLikedGroups = loggedInUser.info.liked_groups;
        let newLikedGroups = [];
        const changedGroupInfo = {...group};
        const modifiedGroupList = [...groupList.groups];
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
        groupListDispatch({ type: 'UPDATE_LIKE', changedGroup: changedGroupInfo });

        const newUserInfo = {...loggedInUser.info};
        newUserInfo.liked_groups = newLikedGroups;
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      
        loggedInUserDispatch({ type: 'SET_LIKED_GROUP',  newLikedGroups: newLikedGroups});

        fetch('http://localhost:5000/updateLikedGroup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.info.email, likedGroups: newLikedGroups, groupId, likeIncrement})
        });
    };

    return (
        <>
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