import { combineReducers } from "redux";
import { foodsReducer, selectedFoodsReducer } from "./foodsReducer";
const reducers = combineReducers({
  allFoods: foodsReducer,
  food: selectedFoodsReducer,
});
export default reducers;
