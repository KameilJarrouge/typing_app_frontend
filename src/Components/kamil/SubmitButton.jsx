import React from "react";

function SubmitButton({ title, onClick = (f) => f }) {
  return (
    <button
      onClick={() => onClick}
      className="w-fit px-4 py-2 rounded-md bg-onSecondary text-onPrimary hover:bg-onSecondary/90 cursor-pointer outline-none focus:bg-onSecondary/90"
    >
      {title}
    </button>
  );
}

export default SubmitButton;
