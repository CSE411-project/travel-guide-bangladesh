import React from 'react';
import './HighlightedTravelGroup.css';

const HighlightedTravelGroup = ({group}) => {
    return (
        <div className="highlighted-travel-group-container col-md-2 text-center my-4 mx-4">
            <img className="logo" src={`data:image/png;base64,${group.logo.img}`} alt=""/>
        </div>
    );
};

export default HighlightedTravelGroup;