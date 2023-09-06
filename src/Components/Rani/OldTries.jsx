import React from "react";

const OldTries = () => {
  return (
    <div className=" flex h-16 bg-[rgb(40,92,170)] justify-between border-solid borde border-black">
      <div className=" flex rounded-md bg-[rgb(155,194,229)] items-center justify-center p-5 m-2 w-96">
        Title
      </div>
      <div className=" flex ">
        <div className=" flex rounded-md bg-[rgb(155,194,229)] items-center justify-center m-2 p-5">
          %
        </div>
        <div className=" flex rounded-md bg-[rgb(155,194,229)] items-center justify-center m-2 p-5">
          wpm
        </div>
        <div className=" flex rounded-md bg-[rgb(155,194,229)] items-center justify-center m-2 p-5">
          time
        </div>
      </div>
      <button className="flex bg-[rgb(99,152,209)] rounded-xl hover:bg-[rgb(52,118,189)] items-center justify-center m-2 p-5">
        Try Again
      </button>
    </div>
  );
};

export default OldTries;
