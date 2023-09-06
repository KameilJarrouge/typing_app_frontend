import React from "react";
import SubmitButton from "./SubmitButton";

function RecentTry({ recentTry }) {
  return (
    <div
      className="flex justify-between items-center h-full
    bg-white rounded-md px-2 py-4 
    border border-onBackground/20 shadow shadow-onBackground/30"
    >
      <div className="flex gap-4">
        <div className="min-w-[30ch]">{recentTry.title}</div>
        <div className="h-auto w-[2px] bg-onBackground/30"></div>
        <div>WPM:{recentTry.wpm}</div>
        <div>{recentTry.percent}</div>
        <div>{recentTry.date}</div>
      </div>
      <div className="">
        <SubmitButton title={"Try Again"} primaryColor />
      </div>
    </div>
  );
}

export default RecentTry;
