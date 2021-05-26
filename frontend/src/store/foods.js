import { LOAD_ADDITIVES, REMOVE_ADDITIVE, ADD_ADDITIVE } from './additives';

const LOAD = 'food/LOAD';
const LOAD_TYPES = 'food/LOAD_TYPES';
const ADD_ONE = 'food/ADD_ONE';

const load = list => ({
  type: LOAD,
  list,
});

// const loadTypes = types => ({
//   type: LOAD_TYPES,
//   types,
// });

const addOneFood = food => ({
  // type: ADD_ONE,
  food,
});

export const createFood = data => async dispatch => {
  console.log(data);
  const response = await fetch(`/api/foods`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const food = await response.json();
    dispatch(addOneFood(food));
    return food;
  }
};

export const updateFood = data => async dispatch => {
  const response = await fetch(`/api/foods/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const food = await response.json();
    dispatch(addOneFood(food));
    return food;
  }
};

export const getOneFood = id => async dispatch => {
  const response = await fetch(`/api/foods/${id}`);

  if (response.ok) {
    const food = await response.json();
    dispatch(addOneFood(food));
  }
};

export const getFood = () => async dispatch => {
  const response = await fetch(`/api/foods`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

// export const getFoodTypes = () => async dispatch => {
//   const response = await fetch(`/api/foods/types`);

//   if (response.ok) {
//     const types = await response.json();
//     dispatch(loadTypes(types));
//   }
// };

const initialState = {
  list: [],
  types: []
};

const sortList = (list) => {
  return list.sort((foodA, foodB) => {
    return foodA.no - foodB.no;
  }).map((food) => food.id);
};

const foodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allFood = {};
      action.list.forEach(food => {
        allFood[food.id] = food;
      });
      return {
        ...allFood,
        ...state,
        list: sortList(action.list),
      };
    }
    case LOAD_TYPES: {
      return {
        ...state,
        types: action.types,
      };
    }
    case ADD_ONE: {
      if (!state[action.food.id]) {
        const newState = {
          ...state,
          [action.food.id]: action.food
        };
        const foodList = newState.list.map(id => newState[id]);
        foodList.push(action.food);
        newState.list = sortList(foodList);
        return newState;
      }
      return {
        ...state,
        [action.food.id]: {
          ...state[action.food.id],
          ...action.food,
        }
      };
    }
    case LOAD_ADDITIVES: {
      return {
        ...state,
        [action.foodId]: {
          ...state[action.foodId],
          additives: action.additives.map(additive => additive.id),
        }
      };
    }
    case REMOVE_ADDITIVE: {
      return {
        ...state,
        [action.foodId]: {
          ...state[action.foodId],
          additives: state[action.foodId].filter(
            (additive) => additive.id !== action.additiveId
          ),
        },
      };
    }
    case ADD_ADDITIVE: {
      console.log(action.additive);
      return {
        ...state,
        [action.additive.foodId]: {
          ...state[action.additive.foodId],
          additives: [...state[action.additive.foodId], action.additive.id],
        },
      };
    }
    default:
      return state;
  }
}

export default foodsReducer;
