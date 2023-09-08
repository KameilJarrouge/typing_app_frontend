import React from "react";
import OldTries from "./OldTries";
import NewTexts from "./NewTexts";

const Main = () => {
  return (
    <div className=" flex flex-col h-full">
      <div className=" flex justify-between items-center h-[64px] p-5 bg-secondary">
        <div className="  p-3 font-bold ">Username</div>
        <button className=" bg-primary h-14 w-14 rounded-full font-bold">
          Logo
        </button>
        <button className=" bg-primary hover:bg-onSecondary p-3 font-bold rounded-xl">
          LogOut
        </button>
      </div>
      <div className=" flex h-full">
        <div className=" flex-[70%] w-[900px] h-[calc(100%-64px)] bg-background">
          <div className=" flex justify-center pt-5">
            <div className=" font-bold mr-5 p-2">Recent Tries</div>
            <button className=" bg-primary rounded-xl hover:bg-onSecondary ml-5 p-2 ">
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
        <div className=" bg-black w-px"></div>
        <div className=" bg-background w-[350px]">
          <div className=" text-center">
            <div className="mr-10 ml-10 mt-4 font-bold">New Texts</div>
            <div>
              <button className=" mr-2 mt-4 bg-primary rounded-xl hover:bg-onSecondary w-32 p-2">
                ALL
              </button>
              <button className="ml-2 mt-4 bg-primary rounded-xl hover:bg-onSecondary w-32 p-2">
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
