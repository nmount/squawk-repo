export const LOAD_ADDITIVES = "additives/LOAD_ADDITIVES";
export const REMOVE_ADDITIVE = "additives/REMOVE_ADDITIVE";
export const UPDATE_ADDITIVE = "additives/UPDATE_ADDITIVE";
export const ADD_ADDITIVE = "additives/ADD_ADDITIVE";

const load = (additives, foodId) => ({
  type: LOAD_ADDITIVES,
  additives,
  foodId,
});

const update = (additive) => ({
  type: UPDATE_ADDITIVE,
  additive,
});

const add = (additive) => ({
  type: ADD_ADDITIVE,
  additive,
});

const remove = (additiveId, foodId) => ({
  type: REMOVE_ADDITIVE,
  additiveId,
  foodId,
});

export const getAdditives = (id) => async (dispatch) => {
  const response = await fetch(`/api/foods/${id}/additives`);

  if (response.ok) {
    const additives = await response.json();
    dispatch(load(additives, id));
  }
};

export const createAdditive = (data, foodId) => async dispatch => {
  const response = await fetch(`/api/foods/${foodId}/additives`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const additive = await response.json();
    dispatch(add(additive));
    return additive;
  }
};

export const updateAdditive = data => async dispatch => {
  const response = await fetch(`/api/additives/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const additive = await response.json();
    dispatch(update(additive));
    return additive;
  }
};

export const deleteAdditive = additiveId => async dispatch => {
  const response = await fetch(`/api/additives/${additiveId}`, {
    method: 'delete',
  });

  if (response.ok) {
    const additive = await response.json();
    dispatch(remove(additive.id, additive.foodId));
  }
};

const initialState = {};

const additivesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ADDITIVES: {
      const newAdditives = {};
      action.additives.forEach(additive => {
        newAdditives[additive.id] = additive;
      })
      return {
        ...state,
        ...newAdditives
      }
    }
    case REMOVE_ADDITIVE: {
      const newState = { ...state };
      delete newState[action.additiveId];
      return newState;
    }
    case ADD_ADDITIVE:
    case UPDATE_ADDITIVE: {
      return {
        ...state,
        [action.additive.id]: action.additive,
      };
    }
    default:
      return state;
  }
};

export default additivesReducer;
