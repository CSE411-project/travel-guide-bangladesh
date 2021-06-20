import React, { useContext } from 'react';
import { UserContext } from '../../App';
import GroupListItem from './GroupListItem';

const TravelGroupList = () => {
    const {groupList} = useContext(UserContext);

    return (
        <div className="container">
            <h1 className="text-center mb-5">Travel Groups</h1>

            <div className="row">
                {
                    groupList.map(group => <GroupListItem key={group._id} group={group} />)
                }
            </div>
        </div>
    );
};

export default TravelGroupList;