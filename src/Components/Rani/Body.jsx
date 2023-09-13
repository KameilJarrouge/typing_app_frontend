import React from "react";
import OldTries from "./OldTries";
import NewText from "./NewText";
import Left from "./Left";
import Right from "./Right";

const Body = () => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-[calc(70%-1px)]">
        <Left />
      </div>
      <div className=" flex flex-col pt-8 pb-8 justify-center">
        <div className=" bg-gray-400 h-full w-px"></div>
      </div>
      <div className="h-full w-[30%] pt-5">
        <Right />
      </div>
    </div>
  );
};

export default Body;
