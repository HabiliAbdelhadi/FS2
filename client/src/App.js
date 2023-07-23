import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Unauthorized from "./components/Unauthorized";
import LinkPage from "./components/LinkPage";
import Missing from "./components/Missing";
import Home from "./components/Home";
import Admin from "./components/Admin";
import PwdReset from "./components/PwdReset";

import RequireAuth from "./components/RequireAuth";
import EmailVerify from "./components/EmailVerify";
import Activate from "./components/Activate";
import PwdVerify from "./components/PwdVerify";
import ChangePwd from "./components/ChangePwd";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { CssBaseline } from "@mui/material";
import "./app.css";
import AboutMe from "./components/AboutMe";
import Courses from "./components/Courses";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public */}
          <Route path="courses" element={<Courses />}></Route>
          <Route path="about" element={<AboutMe />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="signup" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="linkpage" element={<LinkPage />}></Route>
          <Route path="unauthorized" element={<Unauthorized />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/users/:id/verify/:token/"
            element={<EmailVerify />}
          ></Route>
          <Route
            path="/users/:id/reset/:token/"
            element={<PwdVerify />}
          ></Route>
          <Route path="reset-pwd" element={<PwdReset />}></Route>
          {/* Private (role based) */}

          <Route element={<RequireAuth allowedRoles={"admin"} />}>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route
            element={
              <RequireAuth allowedRoles={["default", "admin", "corp"]} />
            }
          >
            <Route path="activate" element={<Activate />}></Route>
          </Route>
          <Route
            element={
              <RequireAuth allowedRoles={["default", "admin", "corp"]} />
            }
          >
            <Route path="change-pwd" element={<ChangePwd />}></Route>
          </Route>

          {/* else */}
          <Route path="*" element={<Missing />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
