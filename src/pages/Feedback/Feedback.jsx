import React, { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
// import Table from "../../Components/table/Table";

const Feedback = () => {
  const [event, setEvent] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const Feedback = async () => {
    const res = await axios.get(
      "https://hotelbooking-9rn0.onrender.com/api/events/"
    );
    if (res.data) {
      setEvent(res.data);
    }
  };
  useEffect(() => {
    Feedback();
  }, []);

  // const handleUpdate = (e) => {
  //   console.log(p);
  // };
  // const handleDelete = (e) => {
  //   console.log(p);
  // };

  return (
    <>
      <>
        <div className="adminContainer">
          <Sidebar toggleSidebar={toggleSidebar} />

          <div className={toggleSidebar ? "rightAdmin" : "fullRightAdmin"}>
            <div className="rightAdminTopbarContainer">
              <div className="adminMenuIcon">
                <CiMenuBurger onClick={handleSidebar} />
              </div>
              <div className="adminlogo">
                <img src="" alt="logo" />
              </div>
            </div>
            <div className="rightAdminTopbarContent">
              <h1>All Events</h1>
              <div className="rightAdminTopbarContentChild">
                <table></table>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Feedback;
