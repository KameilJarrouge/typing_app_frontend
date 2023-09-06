import React from "react";

const OldTries = () => {
  return (
    <div className=" flex h-16 justify-between m-5 border-solid border-2 border-black">
      <div className=" flex border-solid border-2 border-pink-700 items-center justify-center p-5 m-2 w-96">
        Title
      </div>
      <div className=" flex mr-40">
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700 m-2 p-5">
          %
        </div>
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700 m-2 p-5">
          wpm
        </div>
        <div className=" flex items-center justify-center border-solid border-2 border-pink-700 m-2 p-5">
          time
        </div>
      </div>
      <button className="flex items-center justify-center border-solid border-2 border-pink-700 mr-10 m-2 p-5">
        Try Again
      </button>
    </div>
  );
};

export default OldTries;
