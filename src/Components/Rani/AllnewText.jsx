import React from "react";
import { SlSpeedometer } from "react-icons/sl";
const AllnewText = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className=" flex w-full gap-10 p-4 bg-onPrimary rounded-2xl border-2 justify-between border-solid ">
        <div className=" flex font-bold border-r border-gray-300 items-center justify-center w-96">
          Title
        </div>
        <div className=" flex ">
          <div className=" flex rounded-md bg-background border-2 items-center p-2 justify-center ">
            <SlSpeedometer />
          </div>
        </div>
        <button className="flex font-bold bg-onPrimary rounded-2xl hover:text-primary items-center justify-center">
          Try
        </button>
      </div>
    </div>
  );
};

export default AllnewText;
