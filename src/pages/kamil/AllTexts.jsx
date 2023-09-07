import React, { useState } from "react";
import InputField from "../../Components/kamil/InputField";
import { MdSearch } from "react-icons/md";
import NewText from "../../Components/kamil/NewText";
import SwitchField from "../../Components/kamil/SwitchField";
import Text from "../../Components/kamil/Text";

function AllTexts() {
  const [recentTries, setRecentTries] = useState([
    { title: "test" },
    { title: "test" },
    { title: "test" },
    { title: "test" },
    { title: "test" },
  ]);

  const [newText, setNewText] = useState(true);
  return (
    <div className="flex flex-col items-center  w-full h-full gap-6 px-[8rem] py-[1.5rem]">
      {/* Header */}
      <div
        className="flex justify-between items-center  bg-secondary p-2 w-full rounded-md shadow shadow-onBackground/30   
      border border-onBackground/10"
      >
        <div className="flex gap-4">
          <InputField placeholder={"Search"} />
          <SwitchField
            positiveTitle={"New"}
            negativeTitle={"Old"}
            state={newText}
            setState={setNewText}
          />
        </div>
        <div className="px-2 cursor-pointer group" onClick={(f) => f}>
          <MdSearch className="w-[1.5rem] h-auto group-hover:fill-primary cursor-pointer" />
        </div>
      </div>
      {/* Body */}
      <div className="grid grid-cols-2 w-full gap-4  py-2 h-fit overflow-y-scroll scrollbar-none ">
        {recentTries.map((recentTry) => (
          <Text text={recentTry} />
        ))}
      </div>
    </div>
  );
}

export default AllTexts;
