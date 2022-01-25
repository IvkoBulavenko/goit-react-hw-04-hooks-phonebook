import React from "react";
import PropTypes from "prop-types";
import { Find } from "../../Styles/Filter.styled";

const Filter = (props) => {
  return (
    <Find>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onChange={(e) => props.handler(e)}
      />
    </Find>
  );
};

Filter.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Filter;
