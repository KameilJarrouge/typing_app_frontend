import React from "react";
import { SlSpeedometer } from "react-icons/sl";
const AllnewText = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className=" flex w-full gap-10 p-4 hover:border-onSecondary shadow-xl bg-onPrimary rounded-2xl border-2 justify-between border-solid ">
        <div className=" flex font-bold border-r border-gray-300 items-center justify-center w-96">
          Title
        </div>
        <div className=" flex ">
          <div className=" flex rounded-md bg-background border-2 items-center p-3 justify-center ">
            <SlSpeedometer />
          </div>
        </div>
        <button
          className="flex font-bold bg-background rounded-md p-2
         hover:text-white hover:bg-primary border-2 shadow-md items-center justify-center"
        >
          Try
        </button>
      </div>
    </div>
  );
};

export default AllnewText;
