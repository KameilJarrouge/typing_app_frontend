import React from "react";
import OldTries from "./OldTries";
import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex justify-center items-center pt-5">
        <div className="font-bold  p-5">Recent Tries</div>
        <button
          className=" bg-primary rounded-md text-white border-2 border-white shadow-lg hover:bg-onSecondary w-16 p-2 "
          onClick={() => navigate("/rani/main/alltries")}
        >
          All
        </button>
      </div>
      <div className=" flex flex-col gap-4 ">
        {/* scrollbar-thin scrollbar-thumb-rounded-2xl
       scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll */}
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
      </div>
    </div>
  );
};

export default Left;
