import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function LoginForm({ toSignup = (f) => f }) {
  return (
    <div className="flex flex-col gap-8 items-center 2xl:scale-125">
      <div className="text-2xl font-bold text-onBackground animate-pulse  ">
        Welcome back
      </div>
      <div className="flex flex-col justify-center items-center rounded-md bg-secondary px-4 py-6 shadow-onBackground/30 shadow-lg gap-4">
        <InputField placeholder={"username"} />
        <InputField type="password" placeholder={"password"} />
        <SubmitButton title={"Login"} />
        <div className="text-onBackground/70 text-sm">
          Not a user yet?{" "}
          <span
            className="text-onSecondary cursor-pointer"
            onClick={() => toSignup()}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
