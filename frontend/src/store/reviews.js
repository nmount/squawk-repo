import { csrfFetch } from "./csrf";

const LOAD = "review/LOAD";
const CREATE = "review/CREATE";

const load = (reviews) => ({
  type: LOAD,
  reviews,
});

const create = (review) => ({
  type: CREATE,
  review,
});

export const getPhotoReviews = (foodPhotoId) => async (dispatch) => {
  const res = await fetch(`/api/review/${foodPhotoId}`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(load(reviews));
  }
};

export const submitReview = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/review/${data.id}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(create(review));
    return review;
  }
};

export default function reviewReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD:
        newState = {};
        action.reviews.forEach((review) => {
            newState[review.id] = review;
        });
        return newState;
    case CREATE:
        newState = { ...state };
        newState[action.review.id] = action.review;
        return newState;
    // case UPDATE:
    //     newState = {...state,
    //     [action.foodPhoto.id]: action.foodPhoto};
    //     return newState;
    // case REMOVE:
    //     const newState = {...state};
    //     delete newState[action.foodPhotoId];
    //     return newState;
    default:
      return state;
  }
}
