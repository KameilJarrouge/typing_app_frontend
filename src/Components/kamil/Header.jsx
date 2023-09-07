import React from "react";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../helpers/kamil/token";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/kamil/login");
  };

  return (
    <div className="flex justify-between items-center w-full h-[4rem] bg-secondary px-4 border-b border-b-onBackground/20">
      {/* LEFT */}
      <div className="min-w-[25%] flex justify-start">
        <div className="text-onBackground font-bold">Kamil Jarrouj</div>
      </div>

      {/* CENTER */}
      <div
        className="text-onBackground font-extrabold cursor-pointer hover:animate-pulse"
        onClick={() => navigate("/kamil/index")}
      >
        LOGO
      </div>

      {/* RIGHT */}
      <div className="min-w-[25%] flex justify-end">
        <SubmitButton title={"Logout"} onClick={() => handleLogout()} />
      </div>
    </div>
  );
}

export default Header;
