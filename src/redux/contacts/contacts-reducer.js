import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterList } from "./contacts-actions";
// import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./contacts-type";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [filterList]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
