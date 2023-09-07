import React from "react";

function RecentTryInfo({ icon, value }) {
  return (
    <div className="py-1 px-2 rounded-md bg-secondary flex items-center gap-2">
      {icon}
      <div className="text-sm ">{value}</div>
    </div>
  );
}

export default RecentTryInfo;
