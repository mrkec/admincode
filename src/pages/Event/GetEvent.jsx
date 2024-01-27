import React, { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
// import Table from "../../Components/table/Table";

const GetEvent = () => {
  const [event, setEvent] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const getEvent = async () => {
    const res = await axios.get(
      "https://hotelbooking-9rn0.onrender.com/api/events/"
    );
    if (res.data) {
      setEvent(res.data);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);
  console.log(event);

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
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Name Of Event</th>

                    <th>Images</th>
                    <th>Action1</th>
                    <th>Action2</th>
                  </thead>
                  <tbody>
                    {event?.map((e, i) => {
                      return (
                        <tr key={e._id}>
                          <td>{i + 1}</td>
                          <td>{e.name}</td>

                          <td>
                            {/* <img
                              src={e?.imageUrl}
                              alt=""
                              width="100px"
                              height="100px"
                            /> */}
                            {e.imageUrl}
                          </td>
                          <td>Update</td>
                          <td>Delete</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default GetEvent;
