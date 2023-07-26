import React from "react";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="">
          <div class="form-floating mb-3">
            <CustomInput
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-floating">
            <CustomInput
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            className="border-0 px-3 py-2 fw-bold w-100"
            style={{ background: "#1890ff", color: "white" }}
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
