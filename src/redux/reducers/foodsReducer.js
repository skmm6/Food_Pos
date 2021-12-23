import { ActionTypes } from "../constants/action-types";
const intialState = {
  foods: [],
};

export const foodsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FOODS:
      return { ...state, foods: payload };
    default:
      return state;
  }
};

export const selectedFoodsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_FOOD:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_FOOD:
      return {};
    default:
      return state;
  }
};


