import React, { useState } from "react";
import { MdArrowDownward } from "react-icons/md";

function SwitchField({
  positiveTitle,
  negativeTitle,
  state,
  setState = (f) => f,
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      // to make dev reachable by tab
      tabIndex={"0"}
      onClick={() => active && setState((value) => (value ? false : true))}
      onContextMenu={(e) => {
        e.preventDefault();
        setActive((active) => !active);
        setState(undefined);
      }}
      onKeyDown={(e) => {
        if (!active) return;
        if (e.key === " " || e.key === "Enter") {
          setState((value) => (value ? false : true));
        }
      }}
      className={`flex items-center gap-2 py-1 px-1 rounded-md cursor-pointer min-w-[3rem] justify-center select-none
      ${
        state ? "bg-primary text-onPrimary" : "bg-background text-onBackground"
      } outline-onBackground/30  
      border border-onBackground/20 ${!active && "opacity-50"} `}
    >
      {state ? positiveTitle : negativeTitle}
    </div>
  );
}

export default SwitchField;
