import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import RecentTry from "./RecentTry";
import { useNavigate } from "react-router-dom";
function RecentTries() {
  const [recentTries, setRecentTries] = useState([
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00AM" },
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00PM" },
    { title: "test", wpm: 40, percent: 95, date: "19-05-1998 12:00AM" },
  ]);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center  w-full h-full gap-6">
      {/* Header */}
      <div className="flex justify-center items-center gap-8">
        <span className="font-bold">Recent Tries</span>
        <SubmitButton
          title={"All"}
          primaryColor
          onClick={() => navigate("recent-tries")}
        />
      </div>
      {/* Body */}
      <div className="flex flex-col w-full gap-4 px-8 py-2 h-fit overflow-y-scroll scrollbar-none ">
        {recentTries.map((recentTry) => (
          <RecentTry recentTry={recentTry} />
        ))}
      </div>
    </div>
  );
}

export default RecentTries;
