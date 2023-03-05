import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        {post.userName} <FontAwesomeIcon icon={faCircleCheck} className="ps-1"/> - {post.time}
                    </div>
                    <div className="fw-bolder">
                        {post.topic}
                    </div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="Post Image"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;