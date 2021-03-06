// import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./contacts-type";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add", ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction("contact/delete");
// export const deleteContact = (contactId) => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });
export const filterList = createAction("contact/filter");
// export const filterList = (value) => ({
//   type: FILTER,
//   payload: value,
// });
