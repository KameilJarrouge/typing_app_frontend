import React from "react";
import OldTries from "./OldTries";
import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center ">
        <div className="font-bold mr-5 p-2">Recent Tries</div>
        <button
          className=" bg-primary rounded-xl hover:bg-onSecondary ml-5 p-2 "
          onClick={() => navigate("/rani/main/alltries")}
        >
          All
        </button>
      </div>
      <div className=" flex flex-col gap-5 m-5 scrollbar-thin scrollbar-thumb-rounded-2xl scrollbar-thumb-gray-400 scrollbar-track-yellow-400 overflow-y-scroll">
        <OldTries />
        <OldTries />
        <OldTries />
      </div>
    </div>
  );
};

export default Left;
