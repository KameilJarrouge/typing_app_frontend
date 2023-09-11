import React from "react";
import OldTries from "../../Components/Rani/OldTries";

const AllOldTries = () => {
  return (
    <div className=" bg-background gap-5 w-full">
      <div className=" flex justify-center gap-5 items-center p-2">
        <div>
          <input
            className=" rounded-full bg-onPrimary p-3 w-72"
            placeholder="Search by title"
          />
        </div>
        <div className=" flex gap-6">
          <div className="flex gap-3 border-r border-l border-black p-3 rounded-md hover:bg-onSecondary cursor-pointer">
            wpm
            <button>
              <select />
            </button>
          </div>
          <div className=" flex gap-3 border-r border-l border-black p-3 rounded-md hover:bg-onSecondary cursor-pointer">
            %
            <button>
              <select />
            </button>
          </div>
          <div className=" flex gap-3 border-r border-l border-black p-3 rounded-md hover:bg-onSecondary cursor-pointer">
            Tries
            <button>
              <select />
            </button>
          </div>
        </div>
        <div className=" flex gap-3 font-bold  bg-primary p-3 rounded-2xl hover:bg-onSecondary cursor-pointer">
          <button>Search</button>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
        <OldTries />
      </div>
    </div>
  );
};

export default AllOldTries;
