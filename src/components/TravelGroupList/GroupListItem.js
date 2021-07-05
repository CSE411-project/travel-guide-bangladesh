import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from 'react';

const GroupListItem = ({ group }) => {
    const { group_description, logoURL, fb_url, like_count } = group;
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);
    const short_group_description = <>{group_description.substr(0, 100)} ... <span onClick={() => setSeeMoreClicked(true)} style={{cursor: 'pointer'}} className="text-success">see more</span></>

    return (
        <div className="row mb-5">
            <div className="col-md-3 mr-3">
                <img className="img-fluid" src={logoURL} alt="" />
            </div>
            <div className="col-md-8">
                <p className="lead mb-3">
                    {
                        seeMoreClicked
                        ?
                            group_description
                        :
                            short_group_description
                    }
                </p>

                <FontAwesomeIcon style={{fontSize: '1.3em', color: "grey"}} icon={faThumbsUp} /> {like_count}
                <button className="btn btn-outline-success ml-3">Like</button>
                <br />
                <div className="text-secondary row mt-3 mx-0">
                    <h2>
                        <a href={fb_url} target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                    </h2>
                    <h2 className="mx-3"><SiGmail /></h2>
                    <h2><FaTwitter /></h2>
                </div>
            </div>
        </div>
    );
};

export default GroupListItem;