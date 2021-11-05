import React from "react";
import s from "../Filter/Filter.module.css";
import { filterList } from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        className={s.filter__input}
        type="text"
        value={value}
        onChange={(e) => dispatch(filterList(e.currentTarget.value))}
      />
    </label>
  );
}
