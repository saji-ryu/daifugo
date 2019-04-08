import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { socketControllerMiddleware } from "./middlewares";
// import navigationReducer from "../modules/navigation";
import userReducer from "../modules/user";
import spaceReducer from "../modules/space";
import roomReducer from "../modules/room";

const reducers = combineReducers({
  // navigation: navigationReducer,
  user: userReducer,
  space: spaceReducer,
  room: roomReducer,
});
const middlewares = [thunk, socketControllerMiddleware];
const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);
const configureStore = () => createStore(reducers, enhancer);
export default configureStore;
