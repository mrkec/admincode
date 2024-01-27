import React, { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
import { useAuth } from "../../store/Auth";

const GetManger = () => {
  const [manger, setManger] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleDashboard, settoggleDashboard] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const getManger = async () => {
    const res = await axios.get(
      "https://hotelbooking-9rn0.onrender.com/api/mangers/"
    );
    // console.log(res.data);
    setManger(res.data);
  };

  useEffect(() => {
    getManger();
  }, []);
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
  // const handleDashboard = () => {
  //   settoggleDashboard(!toggleDashboard);
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
              <h1>All Empolyess</h1>
              <div className="rightAdminTopbarContentChild">
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Aadhar No</th>
                    <th>Address</th>
                    <th>Salary</th>
                  </thead>
                  <tbody>
                    {manger?.map((m, i) => {
                      return (
                        <tr key={m._id}>
                          <td>{i + 1}</td>
                          <td>{m.name}</td>
                          <td>{m.mobile}</td>
                          <td>{m.aadhar}</td>

                          <td> {m.address}</td>
                          <td>{m.salary}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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

export default GetManger;
