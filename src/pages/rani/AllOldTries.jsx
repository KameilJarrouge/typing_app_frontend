import React from "react";
import OldTries from "../../Components/Rani/OldTries";
import { BsSearch } from "react-icons/Bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { GiSpeedometer } from "react-icons/Gi";

const AllOldTries = () => {
  return (
    <div className=" bg-background gap-5 w-full">
      <div className=" flex justify-center gap-5 items-center p-2">
        <div className="flex rounded-full border-2 shadow-lg  bg-onPrimary p-1 w-72">
          <input
            className=" rounded-full focus:outline-none w-72"
            placeholder="Search by title"
          />
          <div className=" flex gap-3 font-bold p-3 rounded-2xl cursor-pointer">
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
        <div className=" flex gap-6">
          <div
            className="flex items-center gap-3 bg-secondary border-2 p-3 
          rounded-md shadow-md "
          >
            <GiSpeedometer />
            <button onclic>
              <AiOutlineArrowDown />
            </button>
          </div>
          <div
            className=" flex gap-3  bg-secondary border-2 p-3 
          rounded-md shadow-md "
          >
            %
            <button>
              <AiOutlineArrowDown />
            </button>
          </div>
          <div
            className=" flex gap-3  bg-secondary border-2 p-3 
            rounded-md shadow-md"
          >
            Tries
            <button>
              <AiOutlineArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3 w-full">
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
      </div>
    </div>
  );
};

export default AllOldTries;
