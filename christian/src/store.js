import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";

import combinedReducers from "./reducers";
// import saga from "./reducers/saga";

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(saga);
export default store;