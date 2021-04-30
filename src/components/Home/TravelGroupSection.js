import React, { useContext } from 'react';
import TravelGroupImg1 from '../../images/travelGroup/hitTheTrail.png';
import TravelGroupImg2 from '../../images/travelGroup/tourBuzz.png';
import TravelGroupImg3 from '../../images/travelGroup/tourGroupBD.png';
import TravelGroupImg4 from '../../images/travelGroup/gollachut.png';
import './TravelGroupSection.css';
import { UserContext } from '../../App';
import HighlightedTravelGroup from './HighlightedTravelGroup';

const TravelGroupSection = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div className="imglogo">
            <h1 className="text-center text-white pt-2">Travel Groups</h1>

            <div className="row mx-0 justify-content-center">
                {
                    groupList.map(group => <HighlightedTravelGroup key={group.group_name} group={group} />)
                }
            </div>

            <div className="container d-flex justify-content-center pb-4">
                <button className="btn btn-lg see-more-button">
                    See More
                </button>
            </div>
        </div>
    );
};

export default TravelGroupSection;