import React from "react";
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col bg-[url(./public/typing.png)] items-center justify-center h-screen">
        <div className=" flex-col bg-cyan-300 w-80 h-80 align-center p-10 pt-16 ">
          <div className=" flex-col ">
            <div>
              <h2 className=" text-center">Hello</h2>
            </div>
            <div className=" m-8 ">
              <input type="text" placeholder="Username" className=" mb-5" />
              <input type="text" placeholder="Password" className=" " />
            </div>
            <div className=" text-center">
              <button className=" bg-orange-700">Login</button>
              <p className=" m-3">
                New
                <button className="btn" onClick={() => navigate("/Signup")}>
                  Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
