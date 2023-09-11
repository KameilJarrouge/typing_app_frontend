import React from "react";
import NewText from "./NewText";

const Right = () => {
  return (
    <div className="  w-full h-full">
      <div className=" text-center">
        <div className=" font-bold">New Texts</div>
        <div>
          <button
            className=" mr-2 mt-4 bg-primary rounded-xl hover:bg-onSecondary w-32 p-2"
            onClick={() => navigate("/newtexts")}
          >
            ALL
          </button>
          <button className="ml-2 mt-4 bg-primary rounded-xl hover:bg-onSecondary w-32 p-2">
            New
          </button>
        </div>
      </div>
      <div>
        <NewText />
        <NewText />
        <NewText />
        <NewText />
        <NewText />
      </div>
    </div>
  );
};

export default Right;
