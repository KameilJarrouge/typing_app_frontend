import React, { useState } from "react";
import LoginForm from "../../Components/kamil/LoginForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="bg-[url('/typing.png')] bg-cover  w-full h-full flex justify-center items-center ">
      {isLogin ? <LoginForm /> : <>Signup</>}
    </div>
  );
}

export default Login;
