import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import GroupListItem from './GroupListItem';
import './TravelGroupList.css';

const TravelGroupList = () => {
    const {groupList} = useContext(UserContext);

    return (
        <>
            <Navbar />
            
            <div className="container">
                <h1 className="text-center mb-5">Travel Groups</h1>

                <div className="row">
                    {
                        groupList.map(group => <GroupListItem key={group.group_name} group={group} />)
                    }
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TravelGroupList;