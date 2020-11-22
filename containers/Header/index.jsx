import React from "react";
const Header = ({ onClick }) => {
  return (
    <div onClick={onClick} className="w-full h-16 bg-blue-3 cursor-pointer">
      <div className="max-w-screen-md h-full mx-auto py-4 flex flex-row justify-between">
        <div className="w-full md:w-auto flex-full h-full">
          <img src="logo.svg" className="h-full" />
          <span className="mx-2 font-medium">disaricikmalimiyim.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
