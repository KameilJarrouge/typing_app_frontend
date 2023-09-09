import React from "react";

const OldTries = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex h-16 gap-10 bg-onPrimary rounded-2xl border-2 justify-center border-solid ">
        <div className=" flex font-bold  border-r  border-gray-300 items-center justify-center p-5 m-2 w-96">
          Title
        </div>
        <div className=" flex ">
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            %
          </div>
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            wpm
          </div>
          <div className=" flex rounded-md bg-background border-2 items-center justify-center m-2 p-5">
            time
          </div>
        </div>
        <button className="flex font-bold bg-onPrimary rounded-2xl hover:bg-onSecondary items-center justify-center m-2 p-5">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OldTries;
