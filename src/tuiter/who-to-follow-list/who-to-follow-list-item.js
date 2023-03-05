import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt="Avatar"/>
                </div>
                <div className="col-7">
                    <div className="fw-bold">
                        {who.userName}
                        <FontAwesomeIcon icon={faCircleCheck} className="ps-1"/>
                    </div>
                    <div>
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;