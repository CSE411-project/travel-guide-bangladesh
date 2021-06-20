import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const AdminPanel = () => {
    const {setLoadGroup, setLoadDestination} = useContext(UserContext);
    const [groupInfo, setGroupInfo] = useState({});
    const [destinationInfo, setDestinaitonInfo] = useState({});
    const [groupImage, setGroupImage] = useState(null);
    const [destinationImage, setDestinationImage] = useState({});

    const handleGroupFileChange = e => {
        const newGroupImage = e.target.files[0];
        setGroupImage(newGroupImage);
    }

    const handleDestinationFileChange = e => {
        const newDestinationImage = e.target.files;
        setDestinationImage(newDestinationImage);
    }

    const handleGroupBlur = e => {
        const newGroupInfo = {...groupInfo};
        newGroupInfo[e.target.name] = e.target.value;
        setGroupInfo(newGroupInfo);
    }

    const handleDestinationBlur = e => {
        const newDestinationInfo = {...destinationInfo};
        newDestinationInfo[e.target.name] = e.target.value;
        setDestinaitonInfo(newDestinationInfo);
    }

    const handleGroupSubmit = (e) => {
        const groupFormData = new FormData();
        groupFormData.append('group_name', groupInfo.group_name);
        groupFormData.append('fb_url', groupInfo.fb_url);
        groupFormData.append('group_description', groupInfo.group_description);
        groupFormData.append('logo', groupImage);
        groupFormData.append('like_count', 0);

        fetch('http://localhost:5000/addGroup', {
            method: 'POST',
            body: groupFormData
        })
        .then(response => response.json())
        .then(data => {
            if(data === true) 
                alert("Group information added to database successfully !!");
            else
                alert("Error. Please try again...");
            
            setLoadGroup(true);
            e.target.reset();
        })
        .catch(err => {
            console.log(err);
        })

        e.preventDefault();
    };
    
    const handleDestinationSubmit = (e) => {
        const destinationFormData = new FormData();
        destinationFormData.append('destination_name', destinationInfo.destination_name);
        destinationFormData.append('destination_district', destinationInfo.destination_district);
        destinationFormData.append('destination_description', destinationInfo.destination_description);
        destinationFormData.append('like_count', 0);
        for(let i = 0; i < destinationImage.length; i++) {
            destinationFormData.append('destinationImage', destinationImage[i]);
        }

        fetch('http://localhost:5000/addDescription', {
            method: 'POST',
            body: destinationFormData
        })
        .then(response => response.json())
        .then(data => {
            if(data === true) 
                alert("Destination information added to database successfully !!");
            else
                alert("Error. Please try again...");
            
            setLoadDestination(true);
            e.target.reset();
        })
        .catch(err => {
            console.log(err);
        })

        e.preventDefault();
    };

    return (
        <div className="container">     
            <form className="my-5" onSubmit={handleGroupSubmit}>
                <h3>Add a new Group</h3>
                <div className="form-group">
                    <label htmlFor="groupName">Group Name</label>
                    <input onBlur={handleGroupBlur} type="text" id="groupName" className="form-control" name="group_name" placeholder="Group Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="fbURL">Facebook URL</label>
                    <input onBlur={handleGroupBlur} type="text" id="fbURL" className="form-control" name="fb_url" placeholder="Facebook URL" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onBlur={handleGroupBlur} type="text" id="description" className="form-control" name="group_description" placeholder="Group Description" required />
                </div>
                <div className="form-group">
                    <label htmlFor="logoImage">Logo Image</label>
                    <input onChange={handleGroupFileChange} type="file" id="logoImage" name="logo" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <form className="my-5" onSubmit={handleDestinationSubmit}>
                <h3>Add a new Destination</h3>
                <div className="form-group">
                    <label htmlFor="destination-name">Destination Name</label>
                    <input onBlur={handleDestinationBlur} type="text" id="destination-name" className="form-control" name="destination_name" placeholder="Destination Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="destination-district">District Name</label>
                    <input onBlur={handleDestinationBlur} type="text" id="destination-district" className="form-control" name="destination_district" placeholder="District Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="destination-description">Description</label>
                    <textarea onBlur={handleDestinationBlur} id="destination-description" className="form-control" name="destination_description" rows="6" required></textarea>
                    {/* <input onBlur={handleDestinationBlur} type="text" id="destination-description" className="form-control" name="destination_description" placeholder="Destination Description" required /> */}
                </div>
                <div className="form-group">
                    <label htmlFor="destination-images">Destination Images</label>
                    <input onChange={handleDestinationFileChange} type="file" id="destination-images" name="logo" className="form-control" multiple required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AdminPanel;