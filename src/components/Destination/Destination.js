import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const { destinationList } = useContext(UserContext);
    const { destinationId } = useParams();
    const [destination, setDestination] = useState({});
    const [destinationImages, setDestinationImages] = useState([]);
    
    useEffect(() => {
        const currentDestinaiton = destinationList.find(dest => dest._id === destinationId);
        setDestination(currentDestinaiton);

        const images = currentDestinaiton.destImage.map(dest => ({
            src: `data:image/png;base64,${dest.img}`
        }));
        setDestinationImages(images);
    }, [destinationList, destinationId]);
    
    return (
        <>
            <div className="row justify-content-around mt-3">
                <div className="col-md-3 align-self-center">
                    <h1 style={{color: "mediumseagreen"}}>{destination.destination_name}</h1>
                    <h4 style={{color: "mediumseagreen"}}>{destination.destination_district}</h4>
                    <hr />
                    <p className="lead text-success">{destination.like_count} people like this place</p>
                    <button className="btn mr-2">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faThumbsUp} /> Like
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faBookmark} /> Bookmark
                    </button>
                    
                </div>
                <div className="col-md-7">
                    <Carousel images={destinationImages} style={{ height: "500px", width: "100%" }} />
                </div>
            </div>
            <p style={{whiteSpace: "pre-line", color: "green"}} className="container text-justify lead my-5">
                {destination.destination_description}
            </p>
        </>
    );
};

export default Destination;