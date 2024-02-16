import React from 'react'
import UserConsumer from '../../../Context/UserContext'
import LoginForm from './LoginForm';

export default function Login() {
    return (
      <UserConsumer>
        {({ state }) => {
          // This compents is used for define LoginForm component
          // I used two components in order to make the project readable
          return <LoginForm props={state} />;
        }}
      </UserConsumer>
    );
  }