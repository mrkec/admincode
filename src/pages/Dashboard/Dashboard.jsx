import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";
import { useAuth } from "../../store/Auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleDashboard, settoggleDashboard] = useState(false);
  const { auth, setAuth } = useAuth();
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const handleDashboard = () => {
    settoggleDashboard(!toggleDashboard);
  };
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth({
      token: "",
      user: null,
    });
    navigate("/");
  };

  return (
    <>
      <>
        <div className="adminContainer">
          <Sidebar toggleSidebar={toggleSidebar} />

          <div className="rightAdmin">
            <div className="rightAdminTopbarContainer">
              <div className="adminMenuIcon">
                <CiMenuBurger onClick={handleSidebar} />
              </div>
              <div className="adminlogo" onClick={handleDashboard}>
                <div>
                  <img src="/img/admin.png" alt="logo" className="adminImg" />
                </div>
                <div>
                  <img
                    src="/img/dot.png"
                    alt=""
                    className="adminImg"
                    style={{ width: "10px", border: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="rightAdminTopbarContent">
              <div className="rightAdminTopbarContentChild1">
                <div className="adminContent">
                  <div className="adminContentChild">
                    <h1>Users</h1>
                    <p>Total No Of Active User</p>
                  </div>
                  <div className="adminContentChild">
                    <h1>plans</h1>
                    <p>Total No Of Active Plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleDashboard ? "open" : "openNone"}>
            <p
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                boxShadow: "0 0 2px black",
                // padding: "1px",
                width: "100%",
                height: "50%",

                display: "flex",
                // backgroundColor: "tomato",
                // color: "white",
                // gap: "2px",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {auth?.user?.name}
              </p>
            </p>
            <p
              onClick={handleLogOut}
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                boxShadow: "0 0 2px black",
                width: "100%",

                height: "50%",
                cursor: "pointer",
              }}
            >
              LOGOUT
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
