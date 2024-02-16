import React from 'react'
import UserConsumer from '../../../Context/UserContext'
import RegisterForm from './Registerform';
import "./registerform.css";

export default function Register() {
  return (
    <UserConsumer>
      {({ state }) => {
        return <RegisterForm props={state} />;
      }}
    </UserConsumer>
  );
}