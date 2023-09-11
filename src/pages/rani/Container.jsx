import React from "react";
import Main from "./Main";
import AllOldTries from "./AllOldTries";
import SignUp from "./SignUp";
import ToLogin from "./ToLogin";
import { Outlet } from "react-router-dom";
function Container() {
  return (
    <div className=" w-full h-full ">
      <Outlet />
    </div>
  );
}

export default Container;
