import React, { useState } from "react";
import { MdArrowDownward } from "react-icons/md";

function SortField({ title, state, setState = (f) => f }) {
  const [active, setActive] = useState(false);
  return (
    <div
      // to make dev reachable by tab
      tabIndex={"0"}
      onClick={() =>
        active && setState((value) => (value === "asc" ? "desc" : "asc"))
      }
      onContextMenu={(e) => {
        e.preventDefault();
        setActive((active) => !active);
        setState("");
      }}
      onKeyDown={(e) => {
        if (!active) return;
        if (e.key === " " || e.key === "Enter") {
          setState((value) => (value === "asc" ? "desc" : "asc"));
        }
      }}
      className={`flex items-center gap-2 py-1 px-1 rounded-md cursor-pointer
      bg-background text-onBackground outline-onBackground/30  
      border border-onBackground/20 ${!active && "opacity-50"}`}
    >
      {title}
      <div>
        <MdArrowDownward
          className={`w-[1.25rem] h-auto ${
            state === "asc" && "rotate-180"
          } transition-transform`}
        />
      </div>
    </div>
  );
}

export default SortField;
