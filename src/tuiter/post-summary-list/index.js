import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const {posts} = useSelector(state => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, [dispatch]);
  return(
    <ul className="list-group">
      {
        posts.map(post =>
          <PostSummaryItem
            key={post._id} 
            post={post}/> )
      }
    </ul>
  );
};
export default PostSummaryList;