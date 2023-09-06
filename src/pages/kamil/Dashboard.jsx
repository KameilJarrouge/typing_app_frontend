import React from "react";
import RecentTries from "../../Components/kamil/RecentTries";
import NewTexts from "../../Components/kamil/NewTexts";

function Dashboard() {
  return (
    <div className="w-full h-full flex py-[1.5rem]">
      <div className="w-[calc(70%-0.5rem)] h-full ">
        <RecentTries />
      </div>
      <div className="w-[0.5rem] h-full ">
        <div className="bg-onSecondary/60 rounded-full w-full h-full"></div>
      </div>
      <div className="w-[30%] h-full">
        <NewTexts />
      </div>
    </div>
  );
}

export default Dashboard;
