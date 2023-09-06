import React from "react";
import Header from "../../Components/kamil/Header";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div className="w-full h-full flex flex-col bg-background">
      <Header />
      <div className="w-full h-[calc(100%-4rem)] ">
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
