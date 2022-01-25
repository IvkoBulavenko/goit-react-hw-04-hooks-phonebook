import React from 'react';
import PropTypes from 'prop-types';
import { Find } from '../../Styles/Filter.styled';

const Filter = ({ value, changesfilter }) => {
  return (
    <Find>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onChange={value}
        value={changesfilter}
      />
    </Find>
  );
};

Filter.propTypes = {
  value: PropTypes.func,
  changesfilter: PropTypes.string,
};

export default Filter;
