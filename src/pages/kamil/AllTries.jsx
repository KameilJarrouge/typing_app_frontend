import React, { useState } from "react";
import SubmitButton from "../../Components/kamil/SubmitButton";
import RecentTry from "../../Components/kamil/RecentTry";
import InputField from "../../Components/kamil/InputField";
import SortField from "../../Components/kamil/SortField";
import { MdDateRange, MdPercent, MdSearch, MdSpeed } from "react-icons/md";

function AllTries() {
  const [recentTries, setRecentTries] = useState([
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00AM" },
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00PM" },
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00AM" },
  ]);
  const [wpmSort, setWpmSort] = useState("");
  const [percentageSort, setPercentageSort] = useState("");
  const [dateSort, setDateSort] = useState("");
  return (
    <div className="flex flex-col items-center  w-full h-full gap-6 px-[8rem] py-[1.5rem]">
      {/* Header */}
      <div
        className="flex justify-between items-center  bg-secondary p-2 w-full rounded-md shadow shadow-onBackground/30   
      border border-onBackground/10"
      >
        <div className="flex gap-4">
          <InputField placeholder={"Search"} />
          <SortField
            title={<MdSpeed className="w-[1.25rem] h-auto" />}
            state={wpmSort}
            setState={setWpmSort}
          />
          <SortField
            title={<MdPercent className="w-[1.25rem] h-auto" />}
            state={percentageSort}
            setState={setPercentageSort}
          />
          <SortField
            title={<MdDateRange className="w-[1.25rem] h-auto" />}
            state={dateSort}
            setState={setDateSort}
          />
        </div>
        <div className="px-2 cursor-pointer group" onClick={(f) => f}>
          <MdSearch className="w-[1.5rem] h-auto group-hover:fill-primary cursor-pointer" />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col w-full gap-4  py-2 h-fit overflow-y-scroll scrollbar-none ">
        {recentTries.map((recentTry) => (
          <RecentTry recentTry={recentTry} />
        ))}
      </div>
    </div>
  );
}

export default AllTries;
