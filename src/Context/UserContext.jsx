import React, { Component } from "react";
import uniqid from "uniqid";

const UserContext = React.createContext();

export class UserProvider extends Component {
  // Method to get current date
  nowDate = () => {
    const date = new Date();
    const newDate = date.getDate();
    const newMounth = date.getMonth() + 1;
    const newYear = date.getFullYear();
    return newDate + "-" + newMounth + "-" + newYear;
  };

  // Define initial state and methods for user-related actions
  state = {
    userInfo: {
      username: "",
      email: "",
      password: "",
      confimPassword: "",
      date: null,
    },
    passCheck: false,
    loginCheck: false,
    navHome: false,
    homeBlog: true,
    textArea: true,
    blogPost: [],
  };

  // Method to show blog post
  showBlogPost = (e) => {
    this.setState({ textArea: true });
  };

  // Method to submit a new blog post
  submitBlogPost = (e) => {
    e.preventDefault();
    if (this.state.blogPost.length > 0) {
      this.setState({ homeBlog: false });
    }
    this.setState({ textArea: false });
    this.setState((param) => ({
      blogPost: [
        ...param.blogPost,
        {
          title: e.target.title.value,
          post: e.target.post.value,
          id: uniqid(),
        },
      ],
    }));
  };

  // Method to register a new user
  submitRegister = (e) => {
    e.preventDefault();
    if (
      e.target.password.value !== e.target.confirmPassword.value &&
      e.target.confirmPassword.value !== "" &&
      e.target.password.value !== ""
    ) {
      this.setState({ passCheck: true });
    } else {
      this.setState({ passCheck: false });
    }
    if (!this.state.passCheck) {
      this.setState({
        userInfo: {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
          date: e.target.date.value ? e.target.date.value : this.nowDate(),
          confirmPassword: e.target.confirmPassword.value,
        },
      });
    }
  };

  // Method to log in user
  submitLogin = (e) => {
    e.preventDefault();
    if (
      e.target.email.value === this.state.userInfo.email &&
      e.target.password.value === this.state.userInfo.password &&
      e.target.email.value !== "" &&
      e.target.password.value !== ""
    ) {
      this.setState({ loginCheck: true });
      this.setState({ navHome: true });
    } else {
      this.setState({ loginCheck: false });
    }
  };

  // Lifecycle method to check for changes in user info
  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.userInfo) {
      console.log("componentDidUpdate runned");
    }
  }

  render() {
    // Render the provider with its state and methods as context value
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          submitReg: this.submitRegister,
          submitLog: this.submitLogin,
          submitBlogPost: this.submitBlogPost,
          showBlogPost: this.showBlogPost,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
