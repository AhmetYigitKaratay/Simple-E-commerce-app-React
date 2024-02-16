import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserConsumer from "../../../Context/UserContext";
import "./loginform.css";

export default function LoginForm({ props }) {
  let navigate = useNavigate();
  console.log(props);
  useEffect(() => {
    console.log(props.userInfo.confirmPassword === props.userInfo.password);
    if (props.navHome) {
      navigate("/");
    }
  }, [props.loginCheck]);

  const navigateToReg = () => {
    navigate("/register");
  };

  return (
    <UserConsumer>
      {({ submitLog }) => {
        return (
          <div className="container">
            <form
              className="formClass"
              onSubmit={submitLog}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <button className="link-btn" onClick={navigateToReg}>
                Don't have an account? Register here.
              </button>
            </form>
          </div>
        );
      }}
    </UserConsumer>
  );
}