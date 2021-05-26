import { csrfFetch } from "./csrf";

const LOAD = "foodPhoto/LOAD";
const GET_ONE = "foodPhoto/LOAD_ONE";
const ADD = "foodPhoto/ADD";
const SEARCH = 'foodPhoto/SEARCH';

const load = (foodPhotos) => ({
  type: LOAD,
  foodPhotos: foodPhotos,
});

const getOne = (foodPhoto) => ({
  type: GET_ONE,
  foodPhoto: foodPhoto,
});

const add = (foodPhoto) => ({
  type: ADD,
  foodPhoto: foodPhoto,
});

const searchResult = (foodPhotos)=>({
  type:SEARCH,
  foodPhotos:foodPhotos,
})

export const getSingleFoodPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/foodPhoto/${id}`);

  if (res.ok) {
    const foodPhoto = await res.json();
    dispatch(getOne(foodPhoto));
  }
};

export const getfoodPhotos = () => async (dispatch) => {
  const res = await fetch("/api/foodPhoto");

  if (res.ok) {
    const foodPhotos = await res.json();
    dispatch(load(foodPhotos));
  }
};

export const addfoodPhoto = (data) => async (dispatch) => {

  const res = await csrfFetch("/api/foodPhoto", {
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

export const searchfoodPhoto =(searchContent)=>async dispatch=>{
  const res = await fetch(`/api/foodPhoto/search/${searchContent}`)
  if(res.ok){
    const foodPhotos=await res.json()
    console.log(foodPhotos)
    dispatch(searchResult(foodPhotos))
  }
}

const initialState = {};

export default function foodPhotoReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD: {
      newState = {};
      action.foodPhotos.forEach((foodPhoto) => {
        newState[foodPhoto.id] = foodPhoto;
      });
      return newState;
    }
    case GET_ONE:
      newState = {};
      newState[action.foodPhoto.id] = action.foodPhoto;
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
