import { combineReducers } from "redux";
import languageReducer from "./language";
import productsReducer from "./products";

const reducer = combineReducers({
  language: languageReducer,
  products: productsReducer,
});

export default reducer;
