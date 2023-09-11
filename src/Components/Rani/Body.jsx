import React from "react";
import OldTries from "./OldTries";
import NewText from "./NewText";
import Left from "./Left";
import Right from "./Right";

const Body = () => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-[calc(70%-1px)] pt-10">
        <Left />
      </div>
      <div className=" bg-black w-px"></div>
      <div className="h-full w-[30%] pt-10">
        <Right />
      </div>
    </div>
  );
};

export default Body;
