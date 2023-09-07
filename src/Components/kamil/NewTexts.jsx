import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { MdAdd, MdHdrPlus, MdPlusOne } from "react-icons/md";
import RecentTry from "./RecentTry";
import NewText from "./NewText";
import { useNavigate } from "react-router-dom";

function NewTexts() {
  const navigate = useNavigate();
  const [newTexts, setNewTexts] = useState([
    { title: "test" },
    { title: "test" },
    { title: "test" },
  ]);
  return (
    <div className="flex flex-col items-center  w-full h-full gap-6">
      {/* Header */}
      <div className="flex justify-center items-center gap-8">
        <span className="font-bold">New Texts</span>
        <div className="flex items-center gap-4">
          <SubmitButton title={"All"} onClick={() => navigate("all-texts")} />
          <SubmitButton title={<MdAdd className="w-[1.25rem] h-auto" />} />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col w-full gap-4 px-8 py-2 h-fit overflow-y-scroll scrollbar-none ">
        {newTexts.map((newText) => (
          <NewText newText={newText} />
        ))}
      </div>
    </div>
  );
}

export default NewTexts;
