import React from 'react';
import PropTypes from 'prop-types';

const GoButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-gradient-to-r from-blue-2 to-blue-3 p-3 rounded-full hover:scale-105 transform animation-fast"
  >
    <img alt="go" className="w-10" src="https://sariilanlar-cdn.nyc3.digitaloceanspaces.com/vectors/web-app/ArrowLeft.svg" />
  </button>
);
GoButton.propTypes = {
  onClick: PropTypes.func,
};
GoButton.defaultProps = {
  onClick: null,
};
export default GoButton;
