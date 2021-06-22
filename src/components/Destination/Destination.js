import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Destination.css';
import DestinationImage from './DestinationImage';
import BookmarkButton from './BookmarkButton';
import DestinationLikeButton from './DestinationLikeButton';

const Destination = () => {
    const { destinationList } = useContext(UserContext);
    const { destinationId } = useParams();
    const [destination, setDestination] = useState({});
    
    useEffect(() => {
        const currentDestinaiton = destinationList.find(dest => dest._id === destinationId);
        setDestination(currentDestinaiton);
    }, [destinationList, destinationId]);
    
    return (
        <div className="destination-container">
            <div className="row justify-content-around mt-3 w-100">
                <div className="col-md-3 align-self-center">
                    <h1 className="darkOliveGreen">{destination.destination_name}</h1>
                    <h4 className="darkOliveGreen">{destination.destination_district}</h4>
                    <hr />
                    <p className="lead darkOliveGreen">{destination.like_count} people like this place</p>
                    <DestinationLikeButton destinationId={destinationId} />
                    <BookmarkButton destinationId={destinationId} />           
                </div>
                <DestinationImage destinationId={destinationId} />
            </div>
            <p className="container space text-justify lead darkOliveGreen my-5">
                {destination.destination_description}
            </p>
        </div>
    );
};

export default Destination;