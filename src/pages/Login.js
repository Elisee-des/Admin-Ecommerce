import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="" className="">
          <CustomInput
            type="email"
            class="form-control"
            id="email"
            label="Email Address"
          />
          <CustomInput
            type="password"
            class="form-control"
            id="password"
            label="Password"
          />
          <div className="mb-3 text-end">
            <Link to="forgot-password">Forgot password ?</Link>
          </div>
          <Link
            to="/admin"
            className="btn border-0 px-3 py-2 text-white fw-bold w-100 text-decoration-none fs-5"
            style={{ background: "#1890ff" }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
