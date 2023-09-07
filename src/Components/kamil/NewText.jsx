import React, { useState } from "react";

function NewText({ newText }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex justify-center items-center h-full cursor-pointer
        bg-white rounded-md px-2 py-4 
        border border-onBackground/20 shadow shadow-onBackground/30
        hover:bg-primary hover:text-onPrimary"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full flex justify-center">{newText.title}</div>
    </div>
  );
}

export default NewText;
