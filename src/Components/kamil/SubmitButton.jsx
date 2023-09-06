import React from "react";

function SubmitButton({ title, onClick = (f) => f, primaryColor = false }) {
  return (
    <button
      onClick={() => onClick()}
      className={`w-fit px-4 py-1 rounded-md  text-onPrimary cursor-pointer outline-none shadow shadow-onBackground/30 ${
        primaryColor
          ? "bg-primary hover:bg-primary/90 focus:bg-primary/90"
          : "bg-onSecondary hover:bg-onSecondary/90 focus:bg-onSecondary/90"
      } `}
    >
      {title}
    </button>
  );
}

export default SubmitButton;
