import React, { Component } from "react";
import UserConsumer from "../../../Context/UserContext";
import "./profile.css";

class EditUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
    };
  }

  componentDidMount() {
    const { userInfo } = this.props.context.state;
    const { username, email, password, confirmPassword, date } = userInfo;
    this.setState({
      username: username || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      date: date || "",
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, date } = this.state;
    const { submitReg } = this.props.context;
    submitReg({
      target: {
        username,
        email,
        password,
        confirmPassword,
        date,
      },
    });
  };

  render() {
    return (
      <div className="profile-container">
        <h2>Edit User Information</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const Profile = (props) => (
  <UserConsumer>
    {(context) => <EditUserInfo {...props} context={context} />}
  </UserConsumer>
);

export default Profile;
