import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
const TuitItem = (
    {
        post = {
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
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row pb-1">
                <div className="col-2 pt-2 ps-3">
                    <img className="rounded-circle" width={50} src={`/images/${post.image}`} alt="Avatar"/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        {post.userName} <FontAwesomeIcon icon={faCircleCheck} className="ps-1"/> - {post.time}
                    </div>
                    <div className="pb-3">{post.tuit}</div>
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;