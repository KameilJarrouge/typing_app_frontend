import React from "react";
import OldTries from "../../Components/OldTries";

const AllOldTries = () => {
  return (
    <div>
      <div className=" flex items-center justify-between h-28">
        <div>
          <input
            className=" rounded-full bg-black p-3 w-72"
            placeholder="Search by title"
          />
        </div>
        <div className=" flex gap-6">
          <div className="flex gap-3 bg-slate-700 p-3 rounded-md hover:bg-slate-400 cursor-pointer">
            wpm
            <button>
              <select />
            </button>
          </div>
          <div className=" flex gap-3 bg-slate-700 p-3 rounded-md hover:bg-slate-400 cursor-pointer">
            %
            <button>
              <select />
            </button>
          </div>
          <div className=" flex gap-3 bg-slate-700 p-3 rounded-md hover:bg-slate-400 cursor-pointer">
            Tries
            <button>
              <select />
            </button>
          </div>
        </div>
        <div className=" flex gap-3 bg-slate-700 p-3 rounded-md hover:bg-slate-400 cursor-pointer">
          <button>Search</button>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <OldTries />
        <OldTries />
        <OldTries />
      </div>
    </div>
  );
};

export default AllOldTries;
