import React from "react";
import OldTries from "./OldTries";
import NewTexts from "./NewTexts";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className=" flex flex-col bg-cyan-600 h-full">
      <div className=" flex justify-between items-center h-[64px] p-5 bg-[rgb(16,34,95)]">
        <div className=" bg-[rgb(99,152,209)] p-3 rounded-xl">Username</div>
        <button className=" bg-[rgb(99,152,209)] h-14 w-14 rounded-full">
          Logo
        </button>
        <button className=" bg-[rgb(99,152,209)] hover:bg-[rgb(52,118,189)] p-3 rounded-xl">
          LogOut
        </button>
      </div>
      <div className=" flex h-full">
        <div className=" flex-[70%] w-[900px] h-[calc(100%-64px)] bg-[rgb(180,209,241)] f">
          <div className=" flex justify-center pt-5">
            <div className=" bg-[rgb(99,152,209)] rounded-md mr-5 p-2">
              Recent Tries
            </div>
            <button className=" bg-[rgb(99,152,209)] rounded-xl hover:bg-[rgb(52,118,189)] ml-5 p-2 ">
              All
            </button>
          </div>
          <div className=" flex flex-col gap-5 m-5">
            <OldTries />
            <OldTries />
            <OldTries />
            <OldTries />
            <OldTries />
          </div>
        </div>
        <div className=" bg-[rgb(101,150,202)] w-3"></div>
        <div className=" bg-[rgb(180,209,241)] w-[350px]">
          <div className=" text-center">
            <div className="mr-10 ml-10 mt-4 bg-[rgb(99,152,209)] rounded-xl">
              New Texts
            </div>
            <div>
              <button className=" mr-2 mt-4 bg-[rgb(99,152,209)] rounded-xl hover:bg-[rgb(52,118,189)] border-solid border-2 w-32 p-2 border-indigo-600">
                ALL
              </button>
              <button className="ml-2 mt-4 bg-[rgb(99,152,209)] rounded-xl hover:bg-[rgb(52,118,189)] border-solid border-2 w-32 p-2 border-indigo-600">
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
