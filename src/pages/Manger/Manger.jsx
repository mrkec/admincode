import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";

const Manger = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const manger = async () => {
    // console.log(pGround);
    const res = await axios.post(
      "https://hotelbooking-9rn0.onrender.com/api/mangers/",
      {
        name,
        mobile,
        aadhar,
        address,
        salary,
      }
    );
    console.log(res.data);
    // const
    alert("Manger Added succesfully");
  };
  const handleManger = (e) => {
    e.preventDefault();
    manger();
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
              <div className="adminlogo">
                <img src="" alt="logo" />
              </div>
            </div>
            <div className="rightAdminTopbarContent">
              <div className="rightAdminTopbarContentChild1">
                <h1 className="textCenter">Add A New Manger</h1>
                <div className="managerContainer">
                  <form onSubmit={handleManger} className="form">
                    <div>
                      <Input
                        name="name"
                        type="text"
                        title="Name of Manger"
                        value={name}
                        setValue={setName}
                      />
                    </div>
                    <div>
                      <Input
                        name="mobile"
                        type="number"
                        title="Mobile Number Of Manger"
                        value={mobile}
                        setValue={setMobile}
                      />
                    </div>
                    <div>
                      <Input
                        name="aadhar"
                        type="number"
                        title="Adhar No Of Manger"
                        value={aadhar}
                        setValue={setAadhar}
                      />
                    </div>

                    <div>
                      <Input
                        name="salary"
                        type="number"
                        title="Salary Of Manger"
                        value={salary}
                        setValue={setSalary}
                      />
                    </div>
                    <div>
                      <Input
                        name="address"
                        type="text"
                        title="Address Of Manger"
                        value={address}
                        setValue={setAddress}
                      />
                    </div>

                    <div>
                      <SubmitBtn value="Manger" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Manger;
