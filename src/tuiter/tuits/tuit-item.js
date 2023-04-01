import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Topic",
            "userName": "Username",
            "time": "Time",
            "title": "Tuit Title",
            "image": "spacex.jpg",
            "liked": false,
            "disliked": false,
            "dislikes": 12,
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
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row pb-1">
                <div className="col-2 pt-2 ps-3">
                    <img className="rounded-circle" width={50} src={`/images/${tuit.image}`} alt="Avatar"/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        {tuit.userName} <FontAwesomeIcon icon={faCircleCheck} className="ps-1"/> - {tuit.time}
                    </div>
                    <div className="pb-3">{tuit.tuit}</div>
                    <TuitStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;