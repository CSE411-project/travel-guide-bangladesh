import React from 'react';

const HighlightedTravelGroup = ({group}) => {
    return (
        <div className="col-md-2 text-center my-4 mx-4">
            <img className="logo" src={`data:image/png;base64,${group.logo.img}`} alt=""/>
        </div>
    );
};

export default HighlightedTravelGroup;