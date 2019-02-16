import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import navigationReducer from "./modules/navigation";

const reducers = combineReducers({
  navigation: navigationReducer,
});
const middlewares = [];
const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
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
