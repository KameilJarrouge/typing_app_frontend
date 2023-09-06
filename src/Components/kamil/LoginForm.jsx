import React, { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { setToken } from "../../helpers/kamil/token";
import { useNavigate } from "react-router-dom";
import AuthFormContainer from "./AuthFormContainer";

function LoginForm({ toSignup = (f) => f }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 items-center 2xl:scale-125">
      <div className="text-2xl font-bold text-onBackground animate-pulse  ">
        Welcome back
      </div>
      <AuthFormContainer>
        <InputField
          placeholder={"username"}
          state={username}
          setState={setUsername}
        />
        <InputField
          type="password"
          placeholder={"password"}
          state={password}
          setState={setPassword}
        />
        <SubmitButton
          title={"Login"}
          onClick={() => {
            setToken("Hello");
            navigate("/kamil/index");
          }}
        />
        <div className="text-onBackground/70 text-sm">
          Not a user yet?{" "}
          <span
            className="text-onSecondary cursor-pointer"
            onClick={() => toSignup()}
          >
            Register
          </span>
        </div>
      </AuthFormContainer>
    </div>
  );
}

export default LoginForm;
