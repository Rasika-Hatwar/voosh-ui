import { useState } from "react";
import "./Login.scss";
import Logo from "../../../assets/logo.svg";
import GoogleIcon from "../../../assets/google-logo.svg";
import Welcome from "../welcome/Welcome";
export default function Login(props) {
  const [showLogin, setShowLogin] = useState(true);
  const registerUser = () => {
    setShowLogin(false);
  };

  return (
    <>
      {showLogin && (
        <div className="login-container">
          <img className="logo-img" src={Logo} alt="logo" />
          <div className="welcome">Welcome!</div>
          <div className="enter-text">
            Please enter your mail id which has payment mails from swiggy and
            zomato
          </div>
          <div className="box">
            <button className="google-login">
              <img className="google-img" src={GoogleIcon} alt="google-icon" />
              <span>CONTINUE WITH GOOGLE</span>
            </button>
          </div>
          <div className="login-hint-text">
            DONT HAVE GMAIL? ENTER YOUR MAIL ID AND CONTACT SUPPORT
          </div>
          <div className="login-input">
            <input
              className="name-input"
              type="text"
              name="userName"
              placeholder="Email Address"
              // value={state.userName}
              // onChange={handleChange}
            ></input>
          </div>
          <div className="login-input">
            <input
              className="name-input"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              // value={state.userName}
              // onChange={handleChange}
            ></input>
          </div>

          <button className="contact-support-btn" onClick={registerUser}>
            <span>Contact Support</span>
          </button>
        </div>
      )}
      {!showLogin && <Welcome />}
    </>
  );
}
