import React from "react";

const Body = ({ children }) => {
  return (
    <div className="w-full flex-grow flex-full px-4">
      <div className="w-full h-full mx-auto max-w-screen-md flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Body;
