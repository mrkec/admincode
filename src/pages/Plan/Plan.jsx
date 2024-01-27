import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import axios from "axios";
import SubmitBtn from "../../Components/Buttons/SubmitBtn";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";

const Plan = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleDashboard, settoggleDashboard] = useState(false);

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const setPlan = async () => {
    const res = await axios.post(
      "https://hotelbooking-9rn0.onrender.com/api/rooms/",
      {
        name,
        phone,
        rentPerDay,
        imageUrl,
        desc,
      }
    );
    if (res.data) {
      alert("Plan Added Successfully");
      setName("");
      setPhone("");
      setRentPerDay("");
      setImageUrl("");
      setDesc("");
    }
  };
  const handlePlan = (e) => {
    e.preventDefault();
    setPlan();
  };
  const handleDashboard = () => {
    settoggleDashboard(!toggleDashboard);
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
                    src="/public/img/per.jpg"
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
                <h1 className="textCenter">Add A New Plan</h1>
                <form action="" onSubmit={handlePlan} className="form">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      title="Name Of Plan"
                      value={name}
                      setValue={setName}
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="number"
                      title="Phone"
                      value={phone}
                      setValue={setPhone}
                    />
                  </div>
                  <div>
                    <Input
                      name="rentPerDay"
                      type="Number"
                      title="Rent Per Day"
                      value={rentPerDay}
                      setValue={setRentPerDay}
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
                    <Input
                      name="imageUrl"
                      type="text"
                      title="Image Urls"
                      value={imageUrl}
                      setValue={setImageUrl}
                    />
                  </div>
                  <div>
                    <Input
                      name="desc"
                      type="text"
                      title="Description"
                      value={desc}
                      setValue={setDesc}
                    />
                  </div>

                  <div>
                    <SubmitBtn value="Add Plan" />
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

export default Plan;
