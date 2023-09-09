import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col bg-[url(./public/typing.png)] items-center justify-center h-screen">
      <div className=" flex-col bg-cyan-300 w-80 h-80 align-center p-10 pt-13 ">
        <div className=" flex-col ">
          <div>
            <h2 className=" text-center">SignUp</h2>
          </div>
          <div className=" m-8 ">
            <input type="text" placeholder="Username" className=" mb-5" />
            <input type="text" placeholder="password" className=" mb-5" />
            <input
              type="text"
              placeholder="Confirm your Password"
              className=" "
            />
          </div>
          <div className=" text-center">
            <button className=" bg-orange-700">SignUp</button>
            <p className=" m-3">
              <button className="btn" onClick={() => navigate("/Signup")}>
                Back to login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
