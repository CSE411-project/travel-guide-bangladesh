import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import DestinationlistItem from './DestinationListItem';

const DestinationList = () => {
    const {destinationList} = useContext(UserContext);

    return (
        <div className="container">
            <h1 className="text-center mb-5">Travel Destinations</h1>

            <div className="row">
                {
                    destinationList.map(destination => <DestinationlistItem key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationList;