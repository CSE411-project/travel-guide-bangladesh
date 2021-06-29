import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const BookmarkButton = ({ destinationId }) => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if(loggedInUser.bookmarks.find(bookmark => bookmark === destinationId)) 
            setIsBookmarked(true);
    }, [loggedInUser, destinationId]);

    const handleBookmark = () => {
        const currentBookmarks = loggedInUser.bookmarks;
        let newBookmarks = [];

        if(currentBookmarks.includes(destinationId)) {
            newBookmarks = currentBookmarks.filter(bookmark => bookmark !== destinationId);
            setIsBookmarked(false);   
        }
        else {
            newBookmarks = [...currentBookmarks, destinationId];
            setIsBookmarked(true);
        }

        const newUserInfo = loggedInUser;
        newUserInfo.bookmarks = newBookmarks;
        setLoggedInUser(newUserInfo);
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));      

        fetch('http://localhost:5000/updateUserBookmark', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email, bookmarks: newBookmarks})
        });
    };

    return (
        <> 
            {
                isBookmarked
                ?
                    <button onClick={handleBookmark} className="btn btn-success mt-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faBookmark} /> Bookmarked
                    </button>
                :
                    <button onClick={handleBookmark} className="btn mt-2 darkOliveGreen">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faBookmark} /> Bookmark
                    </button>
            }
        </>
    );
};

export default BookmarkButton;