import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center w-full h-[4rem] bg-secondary px-4">
      <div>Kamil Jarrouj</div>
      <div>LOGO</div>
      <div className="px-2 py-1 bg-onSecondary text-white">Logout</div>
    </div>
  );
}

export default Header;
