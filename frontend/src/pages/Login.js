import React from "react";
import { signInWithGoogle } from "../data/firebase";
import logo from "../images/logo.png";
const Login = ({ setLogin }) => {
  const clickHandler = () => {
    setLogin(true);
    signInWithGoogle();
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>

        <button
          onClick={() => clickHandler()}
          type="button"
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
