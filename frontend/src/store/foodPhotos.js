import { csrfFetch } from "./csrf";

const LOAD = "foodPhotos/LOAD";
const GET_ONE = "foodPhotos/GET_ONE";
const ADD = "foodPhotos/ADD";
const REMOVE = "foodPhotos/REMOVE";
const UPDATE = "foodPhotos/UPDATE";
const load = (foodPhotos) => ({
  type: LOAD,
  foodPhotos: foodPhotos
});

const getOne = (foodPhoto) => ({
  type: GET_ONE,
  foodPhoto,
});

const add = (foodPhoto) => ({
  type: ADD,
  foodPhoto,
});

const remove = (foodPhotoId) => ({
  type: REMOVE,
  foodPhotoId,
});

const update = (foodPhoto) => ({
  type: UPDATE,
  foodPhoto,
})



export const getSingleFoodPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/foodPhotos/${id}`);

  if (res.ok) {
    const foodPhoto = await res.json();
    // console.log("YOOOOOO", foodPhoto);
    dispatch(getOne(foodPhoto));
  }
};

export const getFoodPhotos = () => async (dispatch) => {
  const res = await fetch("/api/foodPhotos");

  if (res.ok) {
    const foodPhotos = await res.json();
    dispatch(load(foodPhotos));
  }
};

export const createFoodPhoto = (data) => async (dispatch) => {

  const res = await csrfFetch("/api/foodPhotos", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const foodPhoto = res.json();

    dispatch(add(foodPhoto));
  }
};

export const updateFoodPhoto= data => async dispatch => {
  const response = await csrfFetch(`/api/foodPhotos/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const foodPhoto = await response.json();
    dispatch(update(foodPhoto));
    return foodPhoto;
  }
};

export const deletefoodPhoto = foodPhotoId => async dispatch => {
  const response = await csrfFetch(`/api/foodPhotos/${foodPhotoId}`, {
    method: 'delete',
  });
  console.log('food for bitches ID', foodPhotoId);

  if (response.ok) {
    // const foodPhoto = await response.json();
    dispatch(remove(foodPhotoId));
  }
};

export default function foodReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD:{
      action.foodPhotos.forEach((foodPhoto) => {
        newState[foodPhoto.id] = foodPhoto;
      });
      return action.foodPhotos;
    }
    case GET_ONE: {
    //   newState[action.foodPhoto.id] = action.foodPhoto;
      const foodPhoto = action.foodPhoto;
      return {foodPhoto};
    }
    case ADD: {
      newState = { ...state };
      newState[action.foodPhoto.id] = action.foodPhoto;
      return newState;
    }
    case UPDATE: {
      newState = {...state,
        [action.foodPhoto.id]: action.foodPhoto};
      return newState;
    }
    case REMOVE: {
      newState = {...state};
      delete newState[action.foodPhotoId];
      return newState;
    }
    default:
      return state;
  }
}
