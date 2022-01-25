import React from "react";
import PropTypes from "prop-types";
import { List } from "../../Styles/Contacts.styled";

const Contacts = (props) => {
  return (
    <List>
      {props.contacts.map((item) => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              className="list__btn"
              onClick={() => props.deleteContact(item.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default Contacts;
