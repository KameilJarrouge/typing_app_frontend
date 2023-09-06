import React from "react";

function InputField({ placeholder, state, setState, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-background text-onBackground px-1 py-1 rounded-md min-w-[30ch] outline-onBackground/30"
        placeholder={placeholder ? placeholder : "placeholder"}
        type={type}
      />
    </div>
  );
}

export default InputField;
