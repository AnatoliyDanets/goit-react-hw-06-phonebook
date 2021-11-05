import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  return (
    <ul className={s.contact}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
