import React from "react";
import PropTypes from "prop-types";
import { HeaderPrimary } from "../../Styles/Section.styled";

const Section = (props) => {
  return (
    <div>
      <HeaderPrimary>{props.title}</HeaderPrimary>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
