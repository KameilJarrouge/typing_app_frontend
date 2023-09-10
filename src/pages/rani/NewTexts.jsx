import React from "react";
import AllnewText from "../../Components/Rani/AllnewText";

const NewTexts = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-background">
      <div className=" flex justify-center gap-3">
        <input
          className=" rounded-full bg-onPrimary p-3 w-72"
          placeholder="Search by title"
        />
        <div className=" flex gap-3 font-bold  bg-primary p-3 rounded-3xl hover:bg-onSecondary cursor-pointer">
          <button>Search</button>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <AllnewText />
        <AllnewText />
        <AllnewText />
        <AllnewText />
        <AllnewText />
        <AllnewText />
      </div>
    </div>
  );
};

export default NewTexts;
