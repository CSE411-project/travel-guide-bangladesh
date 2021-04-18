import React from 'react';
import TravelGroupImg1 from '../../images/travelGroup/hitTheTrail.png';
import TravelGroupImg2 from '../../images/travelGroup/tourBuzz.png';
import TravelGroupImg3 from '../../images/travelGroup/tourGroupBD.png';
import TravelGroupImg4 from '../../images/travelGroup/gollachut.png';
import './TravelGroupSection.css';

const TravelGroupSection = () => {
    return (
        <div className="imglogo">
            <h1 className="text-center text-white pt-2">Travel Groups</h1>

            <div className="row mx-0 justify-content-center">
                <div className="col-md-2 text-center my-4 mx-4">
                    <img src={TravelGroupImg1} className="logo" alt="" />
                </div>
                <div className="col-md-2 text-center my-4 mx-4">
                    <img src={TravelGroupImg2} className="logo" alt="" />
                </div>
                <div className="col-md-2 text-center my-4 mx-4">
                    <img src={TravelGroupImg3} className="logo" alt="" />
                </div>
                <div className="col-md-2 text-center my-4 mx-4">
                    <img src={TravelGroupImg4} className="logo" alt="" />
                </div>
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