import React, { useContext } from 'react';
import './TravelGroupSection.css';
import { UserContext } from '../../App';
import HighlightedTravelGroup from './HighlightedTravelGroup';
import { Link } from 'react-router-dom';

const TravelGroupSection = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div style={{position: "relative"}}>
            <div className="travel-group-parallax"></div>
            <div className="travelGroupSection">
                <h1 className="text-center text-white pt-2">Travel Groups</h1>

                <div className="row mx-0 justify-content-center">
                    {
                        groupList.map(group => <HighlightedTravelGroup key={group._id} group={group} />)
                    }
                </div>

                <div className="container d-flex justify-content-center pb-4">
                    <Link to="/travelGroupList">
                        <button className="btn btn-lg see-more-button">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TravelGroupSection;