import "./Login.scss";
import Logo from "../../../assets/logo.svg";
import GoogleIcon from "../../../assets/google-logo.svg";
export default function Login() {
  return (
    <div className="login-container">
      <div>
        <img className="logo-img" src={Logo} alt="logo" />
        <div>Welcome!</div>
        <div>
          Please enter your mail id which has payment mails from swiggy and
          zomato
        </div>
        <div className="box">
          <button className="google-login">
            <img className="google-img" src={GoogleIcon} alt="google-icon" />
            <span>CONTINUE WITH GOOGLE</span>
          </button>
        </div>
        <div>DONT HAVE GMAIL? ENTER YOUR MAIL ID AND CONTACT SUPPORT</div>
        <div>
          <input
            className="name-input"
            type="text"
            name="userName"
            placeholder="Email Address"
            // value={state.userName}
            // onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="name-input"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            // value={state.userName}
            // onChange={handleChange}
          ></input>
        </div>

        <button className="google-login">
          <span>Contact Support</span>
        </button>
      </div>
    </div>
  );
}
