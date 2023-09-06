import React from "react";
import { useNavigate } from "react-router-dom";

function Chooser() {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full gap-4 bg-background">
      <div
        className="bg-primary hover:bg-primary/90 text-onPrimary p-5 rounded-md cursor-pointer"
        onClick={() => navigate("rani")}
      >
        Rani's Pages
      </div>
      <div
        className="bg-primary hover:bg-primary/90 text-onPrimary p-5 rounded-md cursor-pointer"
        onClick={() => navigate("kamil")}
      >
        Kamil's Pages
      </div>
    </div>
  );
}

export default Chooser;
