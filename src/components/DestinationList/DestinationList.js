import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import DestinationlistItem from './DestinationListItem';
import './DestinationList.css';

const DestinationList = () => {
    const {destinationList} = useContext(UserContext);

    return (
        <div className="destination-list container">
            <h1 className="text-center mb-5">Travel Destinations</h1>

            {
                destinationList.length
                ?
                <div className="row">
                    {
                        destinationList.map(destination => <DestinationlistItem key={destination._id} destination={destination} />)
                    }
                </div>
                :
                <div className="loader mx-auto"></div>
            }
        </div>
    );
};

export default DestinationList;