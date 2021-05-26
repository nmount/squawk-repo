import { csrfFetch } from "./csrf";

const LOAD = "reviewPhoto/LOAD";
const GET_ONE = "reviewPhoto/LOAD_ONE";
const ADD = "reviewPhoto/ADD";
const SEARCH = 'reviewPhoto/SEARCH';

const load = (reviewPhotos) => ({
  type: LOAD,
  reviewPhotos: reviewPhotos,
});

const getOne = (reviewPhoto) => ({
  type: GET_ONE,
  reviewPhoto: reviewPhoto,
});

const add = (reviewPhoto) => ({
  type: ADD,
  reviewPhoto: reviewPhoto,
});

const searchResult = (reviewPhotos)=>({
  type:SEARCH,
  reviewPhotos:reviewPhotos,
})

export const getSingleReviewPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviewPhoto/${id}`);

  if (res.ok) {
    const reviewPhoto = await res.json();
    dispatch(getOne(reviewPhoto));
  }
};

export const getreviewPhotos = () => async (dispatch) => {
  const res = await fetch("/api/reviewPhoto");

  if (res.ok) {
    const reviewPhotos = await res.json();
    dispatch(load(reviewPhotos));
  }
};

export const addreviewPhoto = (data) => async (dispatch) => {

  const res = await csrfFetch("/api/reviewPhoto", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const reviewPhoto = res.json();

    dispatch(add(reviewPhoto));
  }
};

export const searchReviewPhoto =(searchContent)=>async dispatch=>{
  const res = await fetch(`/api/reviewPhoto/search/${searchContent}`)
  if(res.ok){
    const reviewPhotos=await res.json()
    console.log(reviewPhotos)
    dispatch(searchResult(reviewPhotos))
  }
}

const initialState = {};

export default function reviewPhotoReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD: {
      newState = {};
      action.reviewPhotos.forEach((reviewPhoto) => {
        newState[reviewPhoto.id] = reviewPhoto;
      });
      return newState;
    }
    case GET_ONE:
      newState = {};
      newState[action.reviewPhoto.id] = action.reviewPhoto;
      return newState;
    case ADD:
      newState = { ...state };
      newState[action.reviewPhoto.id] = action.reviewPhoto;
      return newState;
    case SEARCH:
      newState={};
      action.reviewPhotos.forEach((reviewPhoto) => {
        newState[reviewPhoto.id] = reviewPhoto;
      });
      return newState;
    default:
      return state;
  }
}
