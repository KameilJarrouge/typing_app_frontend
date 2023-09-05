import React from "react";
import OldTries from "./OldTries";
import NewTexts from "./NewTexts";

const Main = () => {
  return (
    <div className=" flex flex-col bg-cyan-600 h-[100vh] ">
      <div className=" flex justify-between items-center h-[64px] p-5 bg-cyan-400">
        <div>Username</div>
        <button>Logo</button>
        <button>LogOut</button>
      </div>
      <div className=" flex h-full">
        <div className=" w-[70%] h-full bg-cyan-700 f">
          <div className=" flex justify-center pt-5">
            <div className=" border-solid border-2 border-indigo-700 mr-5 p-2">
              Recent Tries
            </div>
            <button className="border-solid border-2 border-indigo-700 ml-5 p-2 ">
              All
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <OldTries />
            <OldTries />
            <OldTries />
            <OldTries />
            <OldTries />
          </div>
        </div>
        <div className=" bg-red-100 w-[1rem] h-full"></div>
        <div className=" bg-cyan-300 w-[30%] h-full">
          <div className=" text-center">
            <div className="mr-10 ml-10 mt-4 border-solid border-2 border-indigo-600">
              New Texts
            </div>
            <div>
              <button className=" mr-2 mt-4 border-solid border-2 w-[33%] p-2 border-indigo-600 cursor-pointer hover:bg-black hover:text-white">
                ALL
              </button>
              <button className="ml-2 mt-4 border-solid border-2 w-[33%] p-2 border-indigo-600">
                New
              </button>
            </div>
          </div>
          <NewTexts />
          <NewTexts />
          <NewTexts />
          <NewTexts />
          <NewTexts />
        </div>
      </div>
    </div>
  );
};

export default Main;
