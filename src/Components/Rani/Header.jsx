import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center h-[64px] p-5 bg-secondary">
      <div className="  p-3 font-bold ">Username</div>
      <button
        className=" bg-primary h-14 w-14 rounded-full font-bold "
        onClick={() => navigate("/rani/main")}
      >
        Logo
      </button>
      <button
        className=" bg-primary hover:bg-onSecondary p-3 font-bold rounded-xl"
        onClick={() => navigate("/rani")}
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
