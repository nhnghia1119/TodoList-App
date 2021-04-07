import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({
  todo: todoReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

const INITIAL = {
  todo: {
    todo: cartFromLocalStorage,
  },
};
const store = createStore(
  reducer,
  INITIAL,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
