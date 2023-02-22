
const WhoToFollowListItem = (who) => {
    return (`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img src="../../images/${who.avatarIcon}" class="profile-image">
                    </div>
                    <div class="col-6">
                        <div>
                            ${who.userName}
                            <i class="fa fa-check-circle"></i>
                        </div>
                        <div>
                            ${who.handle}
                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                        <button class="btn btn-primary tuit mx-auto d-block">
                            Follow
                        </button>
                        </div>
                    </div>
                </div>
            </li>
    `);
}
export default WhoToFollowListItem;