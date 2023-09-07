import React from "react";

function ActionButton({
  title,
  onClick = (f) => f,
  primaryColor = false,
  activeOnHover = true,
}) {
  return (
    <button
      onClick={() => onClick()}
      className={`w-fit px-4 py-1 rounded-md group  cursor-pointer outline-none shadow shadow-onBackground/30 ${
        !activeOnHover
          ? "bg-primary text-onPrimary hover:bg-primary/90 focus:bg-primary/90"
          : "bg-secondary text-onBackground hover:bg-primary focus:bg-primary hover:text-onPrimary focus:text-onPrimary"
      } `}
    >
      {title}
    </button>
  );
}

export default ActionButton;
