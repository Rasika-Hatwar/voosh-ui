import { useState } from "react";
import "./Welcome.scss";
import WelcomeIcon from "../../../assets/Group 3.svg";
import ErrorScreen from "../error/ErrorScreen";

export default function Welcome() {
  const [showError, setshowError] = useState(false);
  const navigateToHome = () => {
    setshowError(true);
  };
  return (
    <>
      {!showError && (
        <div className="welcome-container">
          <div className="log-out-container">
            <button className="log-out"> Log Out</button>
          </div>
          <div className="main-title">Well done Naveen,</div>
          <div className="sub-title"> welcome to Voosh</div>
          <div className="patient-text">
            Please be patient. Your account statistics are getting ready in an
            hour{" "}
          </div>
          <img className="logo-img" src={WelcomeIcon} alt="logo" />
          <div className="patient-text" onClick={navigateToHome}>
            Meanwhile you can learn more{"\n"}
            about <span>Voosh Partner</span>{" "}
          </div>
        </div>
      )}
      {showError && <ErrorScreen />}
    </>
  );
}
