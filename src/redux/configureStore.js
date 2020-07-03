import { createStore, combineReducers } from "redux";
import { ConfirmCheck, initialState } from "./confirmCheck";

export const configureStore = () => {
  const store = createStore(combineReducers({ confirmCheck: ConfirmCheck }));

  return store;
};
