import React, { useState } from "react";
import Login from "./pages/Auth/Login";

import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/AdminDashboard/Dashboard/Dashboard";
import AdminRoute from "./Components/Route/AdminRoute";
import Plan from "./pages/Plan/Plan";
import Event from "./pages/Event/Event";
import GetPlan from "./pages/Plan/GetPlan";
import GetEvent from "./pages/Event/GetEvent";
import Manger from "./pages/Manger/Manger";
import GroupD from "./pages/GroupD/GroupD";
import GetGroupD from "./pages/GroupD/GetGropD";
import Booking from "./pages/Booking/Booking";
import Payment from "./pages/Payment/Payment";
import Message from "./pages/Message/Message";
import Feedback from "./pages/Feedback/Feedback";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import GetManger from "./pages/Manger/GetManger";
import GetUser from "./pages/User/GetUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route path="/dashboard" exact element={<AdminRoute />}>
          <Route path="admindashboard" element={<Dashboard />} />
          <Route path="plan" element={<Plan />} />
          <Route path="event" element={<Event />} />
          <Route path="getplan" element={<GetPlan />} />
          <Route path="getevent" element={<GetEvent />} />
          <Route path="manger" element={<Manger />} />
          <Route path="contact" element={<Contact />} />
          <Route path="groupd" element={<GroupD />} />
          <Route path="getgroupd" element={<GetGroupD />} />
          <Route path="getmanger" element={<GetManger />} />
          <Route path="getuser" exact element={<GetUser />} />
          <Route path="booking" element={<Booking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="message" element={<Message />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
