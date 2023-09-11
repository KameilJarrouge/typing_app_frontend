import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToLogin = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 bg-[url(/typing.png)] items-center justify-center h-screen bg-cover">
      <div>
        <h2 className=" text-2xl animate-pulse font-bold text-center">Login</h2>
      </div>
      <div className=" flex flex-col shadow-2xl border-2 bg-secondary shadow-i w-80 justify-center align-center p-5 rounded-3xl">
        <div className=" flex flex-col">
          <div className=" flex flex-col justify-center gap-4">
            <input
              type="text"
              placeholder="Username"
              className=" border-2 rounded-xl p-1 "
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Password"
              className=" border-2 rounded-xl p-1 "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex-col text-center mt-4">
            <button
              className=" mb-2 bg-primary hover:bg-onSecondary p-2 rounded-xl text-white "
              onClick={() => navigate("main")}
            >
              Login
            </button>
            <p className=" ">
              <button
                className=" font-semibold hover:text-onSecondary "
                onClick={() => navigate("SignUp")}
              >
                Create an Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToLogin;
