import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [about, setAbout] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const setContact = async () => {
    // console.log(pGround);
    const res = await axios.post(
      "https://hotelbooking-9rn0.onrender.com/api/contacts/",
      {
        name,
        mobile,
        address,
        pinCode,
        about,
        privacyPolicy,
      }
    );
    if (res.data) {
      alert("Contact  Added Successfully");
    }
    // console.log(res.data);
    // const
  };
  const handleContact = (e) => {
    e.preventDefault();
    setContact();
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
                <h1 className="textCenter">Add A New Contact</h1>
                <form action="" onSubmit={handleContact} className="form">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      title="Name Of Hotel"
                      value={name}
                      setValue={setName}
                    />
                  </div>
                  <div>
                    <Input
                      name="mobile"
                      type="number"
                      title="Mobile"
                      value={mobile}
                      setValue={setMobile}
                    />
                  </div>
                  <div>
                    <Input
                      name="address"
                      type="text"
                      title="Address"
                      value={address}
                      setValue={setAddress}
                    />
                  </div>
                  <div>
                    <Input
                      name="pincode"
                      type="Number"
                      title="Pincode"
                      value={pinCode}
                      setValue={setPinCode}
                    />
                  </div>
                  <div>
                    <Input
                      name="about"
                      type="text"
                      title="About"
                      value={about}
                      setValue={setAbout}
                    />
                  </div>
                  <div>
                    <Input
                      name="privacyPolicy"
                      type="text"
                      title="PrivacyPolicy"
                      value={privacyPolicy}
                      setValue={setPrivacyPolicy}
                    />
                  </div>
                  {/* <h4
                    style={{
                      fontSize: "2rem",
                      padding: ".4rem",
                    }}
                  >
                    Ground Included
                  </h4>
                  <div
                    style={{
                      border: ".2px solid black",
                      margin: "0 .5rem",
                    }}
                  >
                    <select
                      name="pGround"
                      id=""
                      onChange={(e) => {
                        setPGround(e.target.value);
                      }}
                      style={{
                        width: "100%",
                        padding: "1rem",
                        // margin: ".7rem",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div> */}

                  <div>
                    <SubmitBtn value="Add Contact" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Contact;
