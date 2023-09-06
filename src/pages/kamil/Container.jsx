import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getToken } from "../../helpers/kamil/token";

function Container() {
  let navigate = useNavigate();
  let token = getToken();
  useEffect(() => {
    if (token) {
      navigate("index");
    } else {
      navigate("login");
    }
  }, []);
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}

export default Container;
