import React from "react";
import SubmitButton from "./SubmitButton";
import RecentTryInfo from "./RecentTryInfo";
import { MdDateRange, MdPercent, MdRestartAlt, MdSpeed } from "react-icons/md";
import ActionButton from "./ActionButton";
function RecentTry({ recentTry }) {
  return (
    <div
      className="flex justify-between items-center h-full
    bg-white rounded-md px-2 py-4 
    border border-onBackground/20 shadow shadow-onBackground/30"
    >
      <div className="min-w-[30ch]">{recentTry.title}</div>
      <div className="flex gap-4">
        <RecentTryInfo
          value={recentTry.wpm}
          icon={<MdSpeed className="w-[1.25rem] h-auto" />}
        />
        <RecentTryInfo
          value={recentTry.percent}
          icon={<MdPercent className="w-[1.25rem] h-auto" />}
        />
        <RecentTryInfo
          value={recentTry.date}
          icon={<MdDateRange className="w-[1.25rem] h-auto" />}
        />
        <ActionButton
          title={<MdRestartAlt className="w-[1.25rem] h-auto" />}
          primaryColor
        />
      </div>
    </div>
  );
}

export default RecentTry;
