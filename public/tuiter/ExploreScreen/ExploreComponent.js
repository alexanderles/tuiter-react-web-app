import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                 <div class="col-11">
                    <div class="input-group mb-2">
                        <span class="input-group-text text-dark bg-white search-border no-border-right">
                            <i class="fa fa-search"></i>
                        </span>
                        <input type="text" class="form-control search-border no-border-left" placeholder="Search Tuiter">
                    </div>
                 </div>
                 <div class="col-1">
                    <i class="fa fa-cog settings-cog"></i>
                 </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           
           <div class="row">
                <img src="../../images/starship.jpg" class="recommended-image"/>
                <h2 class="fw-bold recommended-image-label">SpaceX's Starship</h2>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
