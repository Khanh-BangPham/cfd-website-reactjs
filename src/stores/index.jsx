import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authGetInfo, authReducer } from "./auth";
import thunk from "redux-thunk";
import { counterReducer } from "./counter";
import { courseReducer, getCourseList } from "./course";
import { pageReducer } from "./page";

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  course: courseReducer,
  page: pageReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log("logger", action);
//   next(action);
// };

// const thunkFake = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(authGetInfo());
// store.dispatch(getCourseList());
export default store;
