import React, { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
// import Table from "../../Components/table/Table";

const Booking = () => {
  const [book, setBook] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const getBooking = async () => {
    const res = await axios.get(
      "https://hotelbooking-9rn0.onrender.com/api/bookings/"
    );
    if (res.data) {
      console.log(res.data);
      setBook(res.data);
    }
  };
  useEffect(() => {
    getBooking();
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
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Room Name</th>
                    <th>CheckInDate</th>
                    <th>CheckOutDate</th>
                    <th>Total Amount</th>
                    <th>No.Of Days</th>
                    <th>status</th>
                  </thead>
                  <tbody>
                    {book?.map((b, i) => {
                      return (
                        <tr key={b._id}>
                          <td>{i + 1}</td>
                          <td>{b.room}</td>
                          <td>{b.checkInDate}</td>
                          <td>{b.checkOutDate}</td>

                          <td> {b.totalAmount}</td>
                          <td>{b.days}</td>
                          <td>{b.status}</td>
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

export default Booking;
