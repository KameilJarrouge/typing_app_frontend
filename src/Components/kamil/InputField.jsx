import React from "react";

function InputField({ placeholder, state, setState, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="px-1 py-1 rounded-md min-w-[30ch]
        bg-background text-onBackground outline-onBackground/30 
        border border-onBackground/20"
        placeholder={placeholder ? placeholder : "placeholder"}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        type={type}
      />
    </div>
  );
}

export default InputField;
