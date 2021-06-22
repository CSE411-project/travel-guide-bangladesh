import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { UserContext } from '../../App';

const DestinationImage = ({destinationId}) => {
    const { destinationList } = useContext(UserContext);
    const [destinationImages, setDestinationImages] = useState([]);

    useEffect(() => {
        const currentDestinaiton = destinationList.find(dest => dest._id === destinationId);
        const images = currentDestinaiton.destImage.map(dest => ({
            src: `data:image/png;base64,${dest.img}`
        }));
        setDestinationImages(images);
    }, [destinationList, destinationId]);

    return (
        <div className="col-md-7">
            <Carousel images={destinationImages} style={{ height: "500px", width: "100%" }} />
        </div>
    );
};

export default DestinationImage;