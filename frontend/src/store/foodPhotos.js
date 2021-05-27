import { csrfFetch } from "./csrf";

const LOAD = "foodPhotos/LOAD";
const GET_ONE = "foodPhotos/GET_ONE";
const ADD = "foodPhotos/ADD";
const SEARCH = 'foodPhotos/SEARCH';

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

const searchResult = (foodPhotos)=>({
  type:SEARCH,
  foodPhotos,
})

export const getSingleFoodPhoto = (id) => async (dispatch) => {
    console.log("singleFoodPHotoIDDD", id);
  const res = await fetch(`/api/foodPhotos/${id}`);

  if (res.ok) {
    const foodPhoto = await res.json();
    console.log("YOOOOOO", foodPhoto);
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

export const addFoodPhoto = (data) => async (dispatch) => {

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

export const searchFoodPhoto = (searchContent) =>async dispatch=>{
  const res = await fetch(`/api/foodPhotos/search/${searchContent}`)
  if(res.ok){
    const foodPhotos=await res.json()
    console.log(foodPhotos)
    dispatch(searchResult(foodPhotos))
  }
}

const initialState = {};

export default function foodReducer(state = initialState, action) {
  let newState = {};
//   console.log("ACTION!!!!!!", action)
  switch (action.type) {
    case LOAD: {
      newState = {};
      action.foodPhotos.forEach((foodPhoto) => {
        newState[foodPhoto.id] = foodPhoto;
      });
      return action.foodPhotos;
    }
    case GET_ONE:
    //   newState[action.foodPhoto.id] = action.foodPhoto;
    const foodPhoto = action.foodPhoto;
    newState = {foodPhoto};
      return newState;
    case ADD:
      newState = { ...state };
      newState[action.foodPhoto.id] = action.foodPhoto;
      return newState;
    case SEARCH:
      newState={};
      action.foodPhotos.forEach((foodPhoto) => {
        newState[foodPhoto.id] = foodPhoto;
      });
      return newState;
    default:
      return state;
  }
}
