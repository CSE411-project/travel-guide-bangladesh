import React from 'react';
import PostNewComment from './PostNewComment';
import SingleComment from './SingleComment';

const CommentSection = ({ destination, setDestination }) => {
    return (
        <div className="container">
            <h2 className="mb-5" style={{color: "DarkOliveGreen"}}>
                Share Your Thoughts Below
            </h2>
            {
                destination.destination_comments?.map(comment => <SingleComment key={comment.comment_id} comment={comment} />)
            }
            <PostNewComment destination={destination} setDestination={setDestination} />
        </div>
    );
};

export default CommentSection;