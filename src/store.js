import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducers/userReducer";
const rootReducer = combineReducers({
  userList: userReducer,
});

const intialState = {};

const middleware = [thunk];

// Store
const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
