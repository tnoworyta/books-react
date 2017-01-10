import React, { PropTypes } from 'react';

const BooksList = ({ name }) => (
  <div>
    <h3>
      Books list, {name}!
    </h3>
  </div>
);

BooksList.propTypes = {
  name: PropTypes.string.isRequired
};

export default BooksList;
