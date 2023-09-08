import React from "react";

const OldTries = () => {
  return (
    <div className=" flex h-16 bg-onPrimary rounded-2xl border-2 justify-between border-solid ">
      <div className=" flex  items-center justify-center p-5 m-2 w-96">
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
      <button className="flex bg-primary rounded-2xl hover:bg-onSecondary items-center justify-center m-2 p-5">
        Try Again
      </button>
    </div>
  );
};

export default OldTries;
