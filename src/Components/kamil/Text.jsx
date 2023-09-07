import React, { useState } from "react";
import { MdArrowForward, MdRestartAlt, MdSpeed } from "react-icons/md";
import RecentTryInfo from "./RecentTryInfo";
import ActionButton from "./ActionButton";
function Text({ text }) {
  return (
    <div
      className="flex justify-between items-center h-full
        bg-white rounded-md px-2 py-4 
        border border-onBackground/20 shadow shadow-onBackground/30
        border-l-4 border-l-primary"
    >
      <div className="min-w-[30ch]">{text.title}</div>
      <div className="flex gap-4 items-center">
        <RecentTryInfo
          value={25}
          icon={<MdSpeed className="w-[1.25rem] h-auto" />}
        />
        <ActionButton
          title={
            !true ? (
              <MdRestartAlt className="w-[1.25rem] h-auto" />
            ) : (
              <MdArrowForward className="w-[1.25rem] h-auto" />
            )
          }
        />
      </div>
    </div>
  );
}

export default Text;
