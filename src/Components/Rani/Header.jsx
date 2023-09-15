import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center h-[64px] p-5 bg-secondary">
      <div className="  p-3 font-bold ">Username</div>
      <button
        className=" h-14 w-14 hover:animate-pulse rounded-full font-bold "
        onClick={() => navigate("/rani/main")}
      >
        Logo
      </button>
      <button
        className=" hover:bg-primary hover:text-white p-3 font-bold rounded-md  "
        onClick={() => navigate("/rani")}
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
