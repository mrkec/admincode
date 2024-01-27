import React from "react";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../store/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(name, password);
      if (name.length == 0 && password.length == 0 && password.length > 6) {
        alert("Name And Password Is required");
        // return;
      }
      const { data } = await axios.post(
        "https://hotelbooking-9rn0.onrender.com/api/auth/login",
        {
          name,
          password,
        }
      );
      console.log("first");
      if (data.success) {
        alert("Login is Succesfully");
        setName("");
        setPassword("");
        setAuth({
          ...auth,
          token: data.token,
          user: data.user,
        });
        localStorage.setItem("auth", JSON.stringify(data));

        navigate("/dashboard/admindashboard");
      } else {
        alert("error in credentails");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {/* todo Login Container */}
      <section id="login" className="">
        <h1 className="loginHeading">Welcome To AgarWal shabha Admin Panel</h1>

        <div className="loginContainer ">
          <div className="rightLogin ">
            <div>
              <form className="formLogin" onSubmit={(e) => handleSubmit(e)}>
                <div className="loginFromgroup">
                  <label htmlFor="">Name:</label>
                  <input
                    type="text"
                    className="loginInputGroup"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="loginFromgroup">
                  <label htmlFor="">Password:</label>
                  <input
                    type="text"
                    className="loginInputGroup"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginFromgroup auto">
                  <input
                    type="submit"
                    value="LOGIN"
                    className="loginInputGroup"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
