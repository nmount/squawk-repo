import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoReviews, submitReview } from "../../store/reviews";
import {loadUsers} from '../../store/users';

export default function Reviews() {
  const [newReview, setNewReview] = useState('')
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const { id } = useParams();
  const reviews=useSelector(state=>Object.values(state.review));
  const userList=useSelector(state=>Object.values(state.users));
  useEffect(() => {
    dispatch(getPhotoReviews(id));
    dispatch(loadUsers());
  }, [dispatch]);

  const onSubmit= async(e)=>{
    e.preventDefault();
    const data={
      newReview,userId,id
    }
    let submitCommentSuccess = await dispatch(submitReview(data));
    setNewReview('')
  }
  return (
    <div className="reviewDiv">
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div className="review">
          <div className="reviewUser">
            {userList.map((user) => {
              if (user.id === review.user_id) {
                return user.username;
              }
            })}
          </div>
          {review.body}
        </div>
      ))}
      <form onSubmit={onSubmit} className="addReview">
        <textarea
          className="newReviewArea"
          rows="5"
          cols="80"
          placeholder="New Review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button className="submitReview" type="submit">
          Review
        </button>
      </form>
    </div>
  );
}
