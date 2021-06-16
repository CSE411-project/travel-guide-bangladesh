import React from 'react';
import './PopularPlacesItem.css';

const PopularPlacesItem = ({destination}) => {
    console.log(destination);
    return (
        <div className="col-md-4 mx-3 mb-5">
            <div className="dest-img-container">
                <img className="image img-fluid" src={`data:image/png;base64,${destination.destImage[0].img}`} alt=""/>
                <div className="details-overlay">
                    <div className="row justify-content-between mx-1">
                        <div className="col-md-4 text-left">
                            <h6>{destination.destination_name}, <br /> {destination.destination_district}</h6>
                        </div>
                        <div className="col-md-4 text-right">
                            <h6>{destination.like_count} people likes <br /> this place</h6>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mt-3 text-center">{destination.destination_name}</h3>
        </div>
    );
};

export default PopularPlacesItem;