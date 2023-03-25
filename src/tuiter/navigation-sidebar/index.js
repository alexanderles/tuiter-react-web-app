import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBookmark,
    faFlask,
    faEllipsisH,
    faEnvelope,
    faHashtag,
    faHome,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
const NavigationSidebar = ({active = '/tuiter'}) => {
    return (
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item">
                <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === '/tuiter'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === '/tuiter/explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Explore
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/labs'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faFlask} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Labs
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Notifications
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Messages
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Bookmarks
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faList} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Lists
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        Profile
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === '/tuiter/more'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        More
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;