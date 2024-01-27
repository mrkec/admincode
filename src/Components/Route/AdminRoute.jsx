import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/Auth";
import { Outlet } from "react-router-dom";
import Redirect from "../Redirect/Redirect";

const AdminRoute = () => {
  const { auth, setAuth } = useAuth();
  const [ok, setOk] = useState();

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("auth");
      const parseUser = JSON.parse(auth);
      setOk(parseUser);
    };
    checkAuth();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Redirect />;
};

export default AdminRoute;
