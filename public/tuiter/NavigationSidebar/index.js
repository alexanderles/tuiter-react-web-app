const NavigationSidebar = () => {
    return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter pe-2"></i></a>
        <a href="../ExploreScreen/index.html" class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-home pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Home
                </div>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-hashtag pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Explore
                </div>
            </div>
        </a>
        <a class="list-group-item" href="../notifications.html">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-bell pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Notifications
                </div>
            </div>
        </a>
        <a class="list-group-item" href="../messages.html">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-envelope pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Messages
                </div>
            </div>
        </a>
        <a class="list-group-item" href="../bookmarks/index.html">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-bookmark pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Bookmarks
                </div>
            </div>
        </a>
        <a class="list-group-item" href="../lists.html">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-list pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Lists
                </div>
            </div>
        </a>
        <a class="list-group-item" href="../profile.html">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-user pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Profile
                </div>
            </div>
        </a>
        <a class="list-group-item" href="/">
            <div class="row">
                <div class="col-2">
                    <i class="fa fa-circle pe-2"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    More
                </div>
            </div>
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;