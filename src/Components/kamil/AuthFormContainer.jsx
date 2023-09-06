import React from "react";

function AuthFormContainer({ children }) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4
      rounded-md px-4 py-6 bg-secondary 
      shadow-lg shadow-onBackground/30   
      border border-onBackground/10"
    >
      {children}
    </div>
  );
}

export default AuthFormContainer;
