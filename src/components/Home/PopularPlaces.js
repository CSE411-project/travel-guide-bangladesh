import React from 'react';
import Sundarban from '../../images/popularPlaces/sundarban.jpg';
import TanguarHaor from '../../images/popularPlaces/tanguarHaor.jpg';
import SaintMartin from '../../images/popularPlaces/saintMartin.jpg';
import Amiakhum from '../../images/popularPlaces/amiakhum.jpg';
import './PopularPlaces.css';

const PopularPlaces = () => {
    return (
        <div className="popular-place-container">
            <h1 className="text-center mt-5 mb-5">Popular Places</h1>

            <div className="container d-flex justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-md-5 justify-content-center">
                        <div className="row">
                            <div className="left-container">
                                <img src={Sundarban} alt="" className="imageblock image" />

                                <div className="left-overlay">
                                    <div className="text">Sundarban</div>
                                </div>
                            </div>

                            <div className="left-container">
                                <img src={TanguarHaor} alt="" className="imageblock image" />

                                <div className="left-overlay">
                                    <div className="text">Tanguar Haor</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 justify-content-center">

                        <div className="row">
                            <div className="right-container">
                                <img src={SaintMartin} alt="" className="imageblock image" />

                                <div className="right-overlay">
                                    <div className="text">Saint Martin</div>
                                </div>
                            </div>

                            <div className="right-container">
                                <img src={Amiakhum} alt="" className="imageblock image" />

                                <div className="right-overlay">
                                    <div className="text">Amiakhum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center mb-5">
                <button className="btn btn-lg view-all-places-button">
                    View All The Places
                </button>
            </div>
        </div>
    );
};

export default PopularPlaces;