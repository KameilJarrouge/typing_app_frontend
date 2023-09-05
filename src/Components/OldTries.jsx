import React from "react";

const OldTries = () => {
  return (
    <div className=" flex h-fit px-4 py-2 justify-between border-solid border-2 border-black">
      <div className=" flex  gap-4">
        <div className="  flex border-solid border-2 border-pink-700 items-center justify-center p-5  w-fit min-w-[250px]">
          Title
        </div>
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700  p-5">
          %
        </div>
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700  p-5">
          wpm
        </div>
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700  p-5">
          time
        </div>
      </div>
      <button className="flex items-center justify-center border-solid border-2 border-pink-700 mr-10  p-5">
        Try Again
      </button>
    </div>
  );
};

export default OldTries;
