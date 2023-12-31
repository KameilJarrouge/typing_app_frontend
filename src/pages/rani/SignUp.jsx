import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 bg-[url(/typing.png)] items-center justify-center h-screen bg-cover">
      <div>
        <h2 className=" text-2xl animate-bounce font-bold text-center">
          SignUp
        </h2>
      </div>
      <div className=" flex flex-col shadow-2xl bg-secondary border-2 border-solid border-gray w-80 justify-center align-center p-5 rounded-3xl">
        <div className=" flex flex-col">
          <div className=" flex flex-col justify-center gap-4">
            <input
              type="text"
              placeholder="Username"
              className=" border-2 rounded-xl p-1 focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              className=" border-2 rounded-xl p-1 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Confirm Your Password"
              className=" border-2 rounded-xl p-1 focus:outline-none"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="flex-col text-center mt-4">
            <button
              className=" mb-2 bg-primary hover:bg-onSecondary p-3 rounded-xl text-white "
              onClick={() => navigate("/rani/main")}
            >
              SignUp
            </button>
            <p className="">
              <button
                className=" font-semibold hover:text-onSecondary "
                onClick={() => navigate("/rani")}
              >
                Already a User
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
