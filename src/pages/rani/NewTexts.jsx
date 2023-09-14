import React from "react";
import AllnewText from "../../Components/Rani/AllnewText";
import { BsSearch } from "react-icons/bs";

const NewTexts = () => {
  return (
    <div className="flex flex-col w-full gap-5 p-5 bg-background">
      <div className=" flex justify-center">
        <div className=" flex justify-center rounded-full bg-onPrimary gap-3">
          <input
            className=" rounded-full bg-onPrimary p-3 w-72 focus:outline-none"
            placeholder="Search by title"
          />
          <div
            className=" flex gap-3 font-bold bg-onPrimary p-3 rounded-full 
           cursor-pointer hover:out"
          >
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

      <div
        className=" flex justify-center overflow-hidden
      scrollbar-thin scrollbar-thumb-rounded-2xl
      scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll"
      >
        <div className=" p-4 flex flex-col gap-3">
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
          <AllnewText />
        </div>
      </div>
    </div>
  );
};

export default NewTexts;
