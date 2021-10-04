import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

export type StateType = ReturnType<typeof store.getState>;

export default store;
