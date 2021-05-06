import React, { useContext } from 'react';
import './TravelGroupSection.css';
import { UserContext } from '../../App';
import HighlightedTravelGroup from './HighlightedTravelGroup';
import { Link } from 'react-router-dom';

const TravelGroupSection = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div className="travelGroupSection">
            <h1 className="text-center text-white pt-2">Travel Groups</h1>

            <div className="row mx-0 justify-content-center">
                {
                    groupList.map(group => <HighlightedTravelGroup key={group.group_name} group={group} />)
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
    );
};

export default TravelGroupSection;