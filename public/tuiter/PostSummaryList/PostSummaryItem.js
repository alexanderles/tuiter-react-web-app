
const PostSummaryItem = (post) => {
    return (`
            <div class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="text-dark text-sm-start pt-1 ps-0">
                        ${post.topic}
                    </div>
                    <div>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa fa-check-circle" style="font-size: 20px"></i>
                        <span class="text-dark">- ${post.time}</span>
                    </div>
                    <div class="text-sm-start fw-bold">
                        ${post.title}
                    </div>
                </div>
                <div class="col-3">
                    <img src="${post.image}" class="mx-auto d-block ten-rad-border" height="100px">
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryItem;