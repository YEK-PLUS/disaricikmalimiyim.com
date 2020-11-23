import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full h-16 bg-blue-3 cursor-pointer"
  >
    <div className="max-w-screen-md h-full mx-auto py-4 flex flex-row justify-between">
      <div className="w-full md:w-auto flex-full h-full">
        <img alt="disaricikmalimiyim.com" src="logo.svg" className="h-full" />
        <span className="mx-2 font-medium">disaricikmalimiyim.com</span>
      </div>
    </div>
  </button>
);
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Header;
