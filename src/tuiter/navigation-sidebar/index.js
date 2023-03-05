import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark,
    faEllipsisH,
    faEnvelope,
    faHashtag,
    faHome,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div className="list-group">
            <a href="/" className="list-group-item">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Home
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Explore
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Notifications
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Messages
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faList} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Lists
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Profile
                    </div>
                </div>
            </a>
            <a href="/" className={`list-group-item ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        More
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;