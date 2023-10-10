import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from "./reducer.js";

const combinedReducers = combineReducers({
  someReducer: rootReducer,
});

const Store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default Store;