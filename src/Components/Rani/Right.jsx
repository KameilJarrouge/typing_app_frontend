import React from "react";
import NewText from "./NewText";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const navigate = useNavigate();
  return (
    <div className="  w-full h-full">
      <div className=" flex flex-col gap-3 text-center">
        <div className=" font-bold">New Texts</div>
        <div className="flex gap-5 justify-center">
          <button
            className="bg-primary rounded-md text-white border-2 border-white 
            shadow-lg  hover:bg-onSecondary w-32 p-2"
            onClick={() => navigate("/rani/main/newtexts")}
          >
            ALL
          </button>
          <button className=" bg-primary rounded-md text-white border-2 border-white shadow-lg hover:bg-onSecondary w-32 p-2">
            New
          </button>
        </div>
      </div>
      <div className="w-full p-1 ">
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
