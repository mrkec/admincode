import React, { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
// import Table from "../../Components/table/Table";

const GetPlan = () => {
  const [plan, setPlan] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  console.log(plan);
  const getPlan = async () => {
    const res = await axios.get(
      "https://hotelbooking-9rn0.onrender.com/api/rooms/"
    );
    if (res.data) {
      setPlan(res.data);
    }
  };
  useEffect(() => {
    getPlan();
  }, []);

  //   console.log(plan);
  const handleUpdate = (p) => {
    console.log(p);
  };
  const handleDelete = (p) => {
    console.log(p);
  };

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
              <div className="adminlogo" style={{ paddingRight: "3rem" }}>
                <img src="" alt="logo" />
              </div>
            </div>
            <div className="rightAdminTopbarContent">
              <h1>All Plans</h1>
              <div className="rightAdminTopbarContentChild">
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>RentPerDay</th>
                    <th>Images</th>
                    <th>CurrentBooking</th>
                    <th>Description</th>
                  </thead>
                  <tbody>
                    {plan?.map((p, i) => {
                      return (
                        <tr key={p._id}>
                          <td>{i + 1}</td>
                          <td>{p.name}</td>
                          <td>{p.phone}</td>
                          <td>{p.rentPerDay}</td>
                          <td>
                            <img
                              src={p?.imageUrl}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                          </td>
                          <td>
                            <tr
                              style={{
                                backgroundColor: "dodgerblue",
                                textTransform: "uppercase",
                                color: "white",
                              }}
                            >
                              <td>name</td>
                              <td>CheckInDate</td>
                              <td>CheckOutDate</td>
                              <td>Status</td>
                            </tr>
                            {p.currentBooking.map((c) => {
                              return (
                                <tr>
                                  <td>{c.name}</td>
                                  <td>{c.checkInDate}</td>
                                  <td>{c.checkOutDate}</td>
                                  <td>{c.status}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td>{p.desc}</td>
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

export default GetPlan;
