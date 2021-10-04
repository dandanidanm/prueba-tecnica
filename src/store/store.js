import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { cardReducer } from "../reducers/cardReducer";

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const reducer = combineReducers({
    auth: authReducer,
    card: cardReducer
  });
  
  export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  