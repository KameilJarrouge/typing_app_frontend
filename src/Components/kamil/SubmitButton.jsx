import React from "react";

function SubmitButton({ title, onClick = (f) => f, primaryColor = false }) {
  return (
    <button
      onClick={() => onClick()}
      className={`w-fit min-h-[2rem] px-4 py-1 rounded-md group  cursor-pointer outline-none 
      shadow shadow-onBackground/30 
      bg-primary hover:bg-primary/90 focus:bg-primary/90 text-onPrimary`}
    >
      {title}
    </button>
  );
}

export default SubmitButton;
