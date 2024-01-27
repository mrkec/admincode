import React, { useState } from "react";
import Sidebar from "../../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";

const Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <div className="adminContainer">
        <Sidebar toggleSidebar={toggleSidebar} />

        <div className={toggleSidebar ? "rightAdmin" : "fullRightAdmin"}>
          <div className="rightAdminTopbarContainer">
            <div className="adminMenuIcon">
              <CiMenuBurger onClick={handleSidebar} />
            </div>
            <div className="adminlogo">
              <div>
                <p>LogOut</p>
              </div>
              {/* <img src="" alt="logo" /> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
