import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faComment, faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {likeTuitToggle} from "../reducers/tuits-reducer";

const TuitStats = ({post = {
                       "_id": 234,
                       "topic": "Topic",
                       "userName": "Username",
                       "time": "Time",
                       "title": "Tuit Title",
                       "image": "spacex.jpg",
                       "liked": false,
                       "replies": 123,
                       "retuits": 234,
                       "likes": 456,
                       "handle": "@handle",
                       "tuit": "Tuit Text"
                   }
                   }) => {
    const dispatch = useDispatch();

    const toggleLikeTuit = (tuit) => {
        dispatch(likeTuitToggle(tuit))
    }

    return (
        <div className="row">
            <div className="col-3">
                <FontAwesomeIcon icon={faComment} className="ps-1"/> {post.replies}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faRetweet} className="ps-1"/> {post.retuits}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faHeart} color={post.liked ? 'red' : 'black'} className="ps-1 fa-regular"
                onClick={() =>
                    toggleLikeTuit(post)}/> {post.likes}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="ps-1 fa-regular"/>
            </div>
        </div>
    );
}

export default TuitStats;