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

            <div class="container d-flex justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-md-5 justify-content-center">
                        <div class="row">
                            <div class="left-container">
                                <img src={Sundarban} alt="" class="imageblock image" />

                                <div class="left-overlay">
                                    <div class="text">Sundarban</div>
                                </div>
                            </div>

                            <div class="left-container">
                                <img src={TanguarHaor} alt="" class="imageblock image" />

                                <div class="left-overlay">
                                    <div class="text">Tanguar Haor</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 justify-content-center">

                        <div class="row">
                            <div class="right-container">
                                <img src={SaintMartin} alt="" class="imageblock image" />

                                <div class="right-overlay">
                                    <div class="text">Saint Martin</div>
                                </div>
                            </div>

                            <div class="right-container">
                                <img src={Amiakhum} alt="" class="imageblock image" />

                                <div class="right-overlay">
                                    <div class="text">Amiakhum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-center mb-5">
                <button class="btn btn-lg view-all-places-button">
                    View All The Places
                </button>
            </div>
        </div>
    );
};

export default PopularPlaces;