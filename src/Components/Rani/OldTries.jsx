import React from "react";
import { GiSpeedometer } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { TbPercentage } from "react-icons/tb";

const OldTries = () => {
  return (
    <div className="  flex flex-col justify-center items-center">
      <div className="shadow-lg flex h-16 gap-10 bg-onPrimary rounded-2xl border-2 justify-center border-solid hover:border-onSecondary">
        <div className=" flex font-bold  border-r  border-gray-300 items-center justify-center p-5 m-2 w-96">
          Title
        </div>
        <div className=" flex ">
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            <TbPercentage />
          </div>
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            <GiSpeedometer />
          </div>
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            <MdDateRange />
          </div>
        </div>
        <button
          className="flex font-bold shadow-md bg-background border-2 
         rounded-md hover:text-white hover:bg-onSecondary items-center
          justify-center m-2 p-5"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OldTries;
