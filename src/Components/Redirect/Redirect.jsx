import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Redirect = ({ path = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location)
  const [cout, setCount] = useState(1);
  // const handleRedirect = () => {
  //   navigate("/login");
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevalue) => --prevalue);
      // handleRedirect();
    }, 1000);
    cout === 0 && navigate(`/${path}`, { state: location.pathname });
    return () => clearInterval(interval);
  }, [cout, navigate, location, path]);
  return (
    <div>
      {/* <button type="button" className="btn" onClick={handleRedirect}>
        Redirect
      </button> */}
    </div>
  );
};

export default Redirect;
