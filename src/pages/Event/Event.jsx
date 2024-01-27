import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";

const Event = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleDashboard, settoggleDashboard] = useState(false);

  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const handleDashboard = () => {
    settoggleDashboard(!toggleDashboard);
  };
  const setEvent = async () => {
    const res = await axios.post(
      "https://hotelbooking-9rn0.onrender.com/api/events/",
      {
        name,
        imageUrl,
      }
    );
    console.log(res.data);
    if (res.data) {
      alert("Event Created Succesfully");
      setName("");
      setImageUrl("");
    }
  };
  const handleEvent = (e) => {
    e.preventDefault();
    setEvent();
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
                  <img
                    src="/public/img/login.jpg"
                    alt="logo"
                    className="adminImg"
                  />
                </div>
                <div>
                  <FaArrowDownLong className="icons" />
                </div>
              </div>
            </div>
            <div className="rightAdminTopbarContent">
              <div className="rightAdminTopbarContentChild1">
                <h1 className="textCenter">Add A New Event</h1>
                <form onSubmit={handleEvent} className="form">
                  <div>
                    <Input
                      name="eventName"
                      type="text"
                      title="Name Of Event"
                      value={name}
                      setValue={setName}
                    />
                  </div>
                  <div>
                    <Input
                      name="eventImage"
                      type="text"
                      title="Event Image"
                      value={imageUrl}
                      setValue={setImageUrl}
                    />
                  </div>

                  <div>
                    <SubmitBtn value="Add Event" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={toggleDashboard ? "open" : "openNone"}>
            <p>Name</p>
            <p>LogOut</p>
          </div>
        </div>
      </>
    </>
  );
};

export default Event;
