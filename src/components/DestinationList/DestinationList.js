import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import DestinationlistItem from './DestinationListItem';
import Loader from '../Shared/Loader';

const DestinationList = () => {
    const { destinationList } = useContext(UserContext);

    return (
        <div className="container">
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
                <Loader />
            }
        </div>
    );
};

export default DestinationList;