import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const GroupListItem = ({group}) => {
    const groupDescription = group.group_description.substr(0, 100);

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100">
                <img style={{height: "300px"}} className="card-img-top" src={group.logoURL} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{group.group_name}</h5>
                    <p className="card-text">{groupDescription} ...</p>
                    
                    <div className="row justify-content-between px-3">
                        <h6 className="pt-2">
                            <FontAwesomeIcon style={{fontSize: '1.3em', color: "grey"}} icon={faThumbsUp} /> {group.like_count}
                        </h6>
                        <button className="btn btn-secondary">See Full Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupListItem;