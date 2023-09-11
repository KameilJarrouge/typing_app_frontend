import React, { useState } from "react";
import LoginForm from "../../Components/kamil/LoginForm";
import SignupForm from "../../Components/kamil/SignupForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="bg-[url('/typing.png')] bg-cover  w-full h-full flex justify-center items-center">
      {isLogin ? (
        <LoginForm toSignup={() => setIsLogin(false)} />
      ) : (
        <SignupForm toLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default Login;
