import React, { useContext } from 'react';
import { UserContext } from '../../App';
import GroupListItem from './GroupListItem';
import './TravelGroupList.css';

const TravelGroupList = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div className="travel-group-list container">
            <h1 className="text-center my-5">Travel Groups</h1>

            {
                groupList.length
                ?
                <div className="row">
                    {
                        groupList.map(group => <GroupListItem key={group._id} group={group} />)
                    }
                </div>
                :
                <div className="loader mx-auto"></div>
            }
        </div>
    );
};

export default TravelGroupList;