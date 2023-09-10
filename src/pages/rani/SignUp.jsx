import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 bg-[url(./public/typing.png)] items-center justify-center h-screen">
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
              className=" border-2 rounded-xl p-1 "
            />
            <input
              type="text"
              placeholder="Password"
              className=" border-2 rounded-xl p-1 "
            />
            <input
              type="text"
              placeholder="Confirm Your Password"
              className=" border-2 rounded-xl p-1 "
            />
          </div>
          <div className="flex-col text-center mt-4">
            <button
              className=" mb-2 bg-primary hover:bg-onSecondary p-3 rounded-xl text-white "
              onClick={() => navigate("/main")}
            >
              SignUp
            </button>
            <p className="">
              <button
                className=" font-semibold hover:text-onSecondary "
                onClick={() => navigate("/Login")}
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
