import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Components/Rani/Header";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col h-full bg-background">
      <Header />
      <div className=" flex h-[calc(100%-64px)] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
