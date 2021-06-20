import React, { useContext } from 'react';
import './TravelGroupSection.css';
import { UserContext } from '../../App';
import HighlightedTravelGroup from './HighlightedTravelGroup';
import { Link } from 'react-router-dom';

const TravelGroupSection = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div className="travel-group-container" style={{position: "relative"}}>
            <div className="travel-group-parallax"></div>
            <div className="travelGroupSection">
                <div className="mx-auto text-center text-white">
                    <h1 className="mt-3 mb-5">Travel Groups</h1>

                    {
                        groupList.length
                        ?
                        <div className="row justify-content-center">
                            {
                                groupList.map(group => <HighlightedTravelGroup key={group._id} group={group} />)
                            }
                        </div>
                        :
                        <div className="loader mx-auto"></div>
                    }

                    <div className="container d-flex justify-content-center pb-4">
                        <Link to="/travelGroupList">
                            <button className="btn btn-lg see-more-button">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelGroupSection;