// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   compose,
// } from "redux";
// import createSagaMiddleware from "redux-saga";

// import rootSaga from "./sagas";
// import rootReducer from "./reducers";

// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
//   // other store enhancers if any
// );

// const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(rootSaga);

// import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "../pages/Book/reducers/book";
// import bookListReducer from "../pages/Books/reducers/bookList";
// import statisticsReducer from "../pages/Statistics/reducers/statistics";
// import paginationReducer from "../components/Pagination/reducers/pagination";

// const store = configureStore({
//   reducer: {
//     book: bookReducer,
//     bookList: bookListReducer,
//     statistics: statisticsReducer,
//     pagination: paginationReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
