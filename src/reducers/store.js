import React from "react";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootreducer from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["authType", "tokenFcm"],
};

const pReducer = persistReducer(persistConfig, rootreducer);

const middlewate = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middlewate);
const presistor = persistStore(store);

export { presistor, store };

// function configureStore(initialstate = {}) {
//   const reducer = combineReducers({
//     auth: () => ({ mock: true }),
//     form: persistReducer(
//       {
//         key: "form",
//         storage,
//         blacklist: ["foo"],
//       },
//       rootreducer
//     ),
//   });

//   const store = createStore(
//     persistReducer(
//       {
//         key: "root",
//         storage,
//         whitelist: ["auth"],
//       },
//       reducer
//     ),
//     initialstate
//   );

//   const persistor = persistStore(store, null, () => {
//     console.log("restoreState", store.getState());
//   });
//   return { store, persistor };
//   //return createStore(reducer, state);
// }

// export default configureStore;
