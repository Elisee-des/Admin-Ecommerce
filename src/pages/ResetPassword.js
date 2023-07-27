import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Forget Password</h3>
        <p className="text-center">
          Please enter your email to get new password
        </p>
        <div className="">
          <div class="form-floating mb-3">
            <CustomInput
              type="email"
              class="form-control"
              id="email"
              label="Email Address"
            />
          </div>

          <button
            className="border-0 px-3 py-2 fw-bold w-100"
            style={{ background: "#1890ff", color: "white" }}
            type="submit"
          >
            Send Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
