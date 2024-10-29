import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentstate] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-conatiner">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms and conditions of use & privacy
            policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentstate("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentstate("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
