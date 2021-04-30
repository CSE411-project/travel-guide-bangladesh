import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar';

const AdminPanel = () => {
    const {setGroupList, setLoadGroup} = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('group_name', info.group_name);
        formData.append('fb_url', info.fb_url);
        formData.append('group_description', info.group_description);
        formData.append('logo', file);
        formData.append('like_count', 0);

        fetch('http://localhost:5000/addGroup', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if(data == true) 
                alert("Group information added to database successfully !!");
            else
                alert("Error. Please try again...");
            
            setLoadGroup(true);
        })
        .catch(err => {
            console.log(err);
        })

        e.preventDefault();
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">     
                {/* <button className="m-5" onClick={handleClick}>Set Group Info</button>   */}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="groupName">Group Name</label>
                        <input onBlur={handleBlur} type="text" id="groupName" className="form-control" name="group_name" placeholder="Group Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fbURL">Facebook URL</label>
                        <input onBlur={handleBlur} type="text" id="fbURL" className="form-control" name="fb_url" placeholder="Facebook URL" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input onBlur={handleBlur} type="text" id="description" className="form-control" name="group_description" placeholder="Group Description" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logoImage">Logo Image</label>
                        <input onChange={handleFileChange} type="file" id="logoImage" name="logo" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AdminPanel;