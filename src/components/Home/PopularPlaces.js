import React, { useContext } from 'react';
import './PopularPlaces.css';
import PopularPlacesItem from './PopularPlacesItem';
import { UserContext } from '../../App';

const PopularPlaces = () => {
    const {destinationList} = useContext(UserContext);
    console.log(typeof destinationList);
    console.log(destinationList);

    return (
        <div className="popular-place-container">
            <h1 className="text-center mt-5 mb-5">Now Trending</h1>

            <div className="row justify-content-center">
                {
                    destinationList.map(destination => <PopularPlacesItem key={destination.destination_name} destination={destination} />)
                }
            </div>

            <div style={{marginTop: "-50px"}} className="container d-flex justify-content-center mb-5">
                <button className="btn btn-lg view-all-places-button">
                    See More
                </button>
            </div>
        </div>
    );
};

export default PopularPlaces;