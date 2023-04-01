import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faComment, faHeart, faRetweet, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({
                       tuit = {
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
                           "disliked": true,
                           "dislikes": 1024,
                           "handle": "@handle",
                           "tuit": "Tuit Text"
                       }
                   }) => {
    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col-2">
                <FontAwesomeIcon icon={faComment} className="ps-1"/> {tuit.replies}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faRetweet} className="ps-1"/> {tuit.retuits}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faHeart} color={tuit.liked ? 'red' : 'black'} className="ps-1 fa-regular"
                                 onClick={() => dispatch(updateTuitThunk({
                                     ...tuit,
                                     likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                                     liked: !tuit.liked
                                 }))}/> {tuit.likes}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faThumbsDown} color={tuit.disliked ? 'red' : 'black'} className="ps-1 fa-regular"
                                 onClick={() => dispatch(updateTuitThunk({
                                     ...tuit,
                                     dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                                     disliked: !tuit.disliked
                                 }))}/> {tuit.dislikes}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="ps-1 fa-regular"/>
            </div>
        </div>
    );
}

export default TuitStats;