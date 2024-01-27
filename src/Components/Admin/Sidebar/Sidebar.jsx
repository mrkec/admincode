import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdContactEmergency,
  MdDashboard,
  MdImportContacts,
  MdPayments,
} from "react-icons/Md";
import { PiStudentBold } from "react-icons/Pi";
import { FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
import { FcManager, FcAcceptDatabase } from "react-icons/fc";
import { FaRestroom } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
// import {  } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import "./Sidebar.css";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={toggleSidebar ? "sidebarAdminContainer" : "insideSidebar"}>
      <div className="sideBarAdminChild">
        <MdDashboard className="icons" />

        <NavLink to="/dashboard/admindashboard">Dashboard</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaRestroom className="icons" />

        <NavLink to="/dashboard/plan">Add Plan</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <BsCalendar2EventFill className="icons" />

        <NavLink to="/dashboard/event">Add Event</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaPeopleLine className="icons" />
        <NavLink to="/dashboard/manger">Add Manager</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaPeopleGroup className="icons" />
        <NavLink to="/dashboard/groupd">Add Empolyee</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <MdImportContacts className="icons" />
        <NavLink to="/dashboard/contact">Add Contact</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaRestroom className="icons" />
        <NavLink to="/dashboard/getplan">Plans</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <BsCalendar2EventFill className="icons" />
        <NavLink to="/dashboard/getevent">Events</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaPeopleGroup className="icons" />
        <NavLink to="/dashboard/getgroupd">Empolyee</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <FaPeopleGroup className="icons" />
        <NavLink to="/dashboard/getmanger">Manager</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <TbBrandBooking className="icons" />
        <NavLink to="/dashboard/booking">Bookings</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <MdPayments className="icons" />
        <NavLink to="/dashboard/payment">Payments</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <MdPayments className="icons" />
        <NavLink to="/dashboard/message"> Add Message</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <MdPayments className="icons" />
        <NavLink to="/dashboard/getuser">User</NavLink>
      </div>
      <div className="sideBarAdminChild">
        <MdPayments className="icons" />
        <NavLink to="/dashboard/feedback">Feedback</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
