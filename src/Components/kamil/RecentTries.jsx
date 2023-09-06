import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import RecentTry from "./RecentTry";
function RecentTries() {
  const [recentTries, setRecentTries] = useState([
    { title: "test", wpm: 40, percent: "95%", date: "19-05-1998" },
  ]);
  return (
    <div className="flex flex-col items-center  w-full h-full gap-8">
      {/* Header */}
      <div className="flex justify-center items-center gap-8">
        <span className="font-bold">Recent Tries</span>
        <SubmitButton title={"All"} primaryColor />
      </div>
      {/* Body */}
      <div className="flex flex-col w-full gap-4 px-8 h-fit overflow-y-scroll">
        {recentTries.map((recentTry) => (
          <RecentTry recentTry={recentTry} />
        ))}
      </div>
    </div>
  );
}

export default RecentTries;
