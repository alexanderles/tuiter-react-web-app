import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5 mb-2"/>
                    <FontAwesomeIcon icon={faSearch} className="position-absolute
                       wd-nudge-up"></FontAwesomeIcon>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faGear} className="pt-2 wd-bottom-3 text-primary float-end
                     fs-4 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link active">For You</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link">News</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/explore" className="nav-link">Entertainment</Link>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpg" className="w-100" alt="Starship"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;