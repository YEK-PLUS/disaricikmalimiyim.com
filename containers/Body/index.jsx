import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
  <div className="w-full flex-grow flex-full px-4">
    <div className="w-full h-full mx-auto max-w-screen-md flex flex-col justify-center items-center">
      {children}
    </div>
  </div>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Body;
