import posts from "./post.js";

const PostItem = (posts) => {
    return `
            <li class="list-group-item d-flex">
                <img class="rounded-circle me-2" src="${posts.profilePic}" width="48" height="48">
                <div class="ms-2">
                    <div>
                        <label class="wd-title">${posts.userName}</label>
                        <i class="fas fa-check-circle"></i>
                        <label class="text-dark">@${posts.handle} • ${posts.time}</label>
                        <i class="justify-self-end fa fa-ellipsis-h text-secondary"></i><br/>
                        <label class="wd-title mb-2">${posts.title} <a href="#">${posts.titleLink}</a></label>
                    </div>
                <div class="border border-secondary wd-post-border">
                    <div class="row">
                        <img class="wd-post-image" src="${posts.image}">
                        <div>
                            <label class="text-white mt-2 ms-3 me-3">${posts.postTitle}</label>
                            <p class="text-dark ms-3 me-3">${posts.detail}<br/>${posts.link}</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between me-5 mt-2">
                    <a href="#"><i class="far fa-comment text-dark"><span class="ms-2 fw-thin">${posts.comment}</span></i></a>                       
                    <a href="#"><i class="fa fa-retweet text-dark"><span class="ms-2 fw-thin">${posts.retweet}</span></i></a>
                    <a href="#"><i class="far fa-heart text-dark"><span class="ms-2 fw-thin">${posts.like}</span></i></a>                       
                    <a href="#"><i class="fa fa-upload text-dark"></i></a>
                </div>
            </li>
            `;
};

export default PostItem;