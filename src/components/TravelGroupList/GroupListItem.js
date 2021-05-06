import React from 'react';

const GroupListItem = ({group}) => {
    const groupDescription = group.group_description.substr(0, 100);

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100">
                <img style={{height: "300px"}} className="card-img-top" src={`data:image/png;base64,${group.logo.img}`} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{group.group_name}</h5>
                    <p className="card-text">{groupDescription} ...</p>
                    <button className="btn btn-secondary">See Full Info</button>
                </div>
            </div>
        </div>
    );
};

export default GroupListItem;