import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserConsumer from "../../../Context/UserContext";
import "./registerform.css";

export default function RegisterForm({ props }) {
  let navigate = useNavigate();
  console.log(props);
  useEffect(() => {
    console.log(props.userInfo.confirmPassword === props.userInfo.password);
    if (props.userInfo.confirmPassword === props.userInfo.password) {
      navigate("/login");
    }
  }, [props.userInfo]);

  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <UserConsumer>
      {({ submitReg, state }) => {
        return (
          <div className="registerForm">
            <div className="row registerRow">
              <div className="card">
                <h5 className="card-title text-center">Sign Up Page</h5>
                <div className="card-text">
                  <form className="row-cols-1 g-5" onSubmit={submitReg}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        id="date"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                    <button className="link-btn" onClick={navigateToLogin}>
                      Already have an account? Login here.
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}