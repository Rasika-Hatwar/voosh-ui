import { useState } from "react";
import "./ErrorScreen.scss";
import WelcomeIcon from "../../../assets/Group 3.svg";
import Home from "../home/Home";

export default function ErrorScreen() {
  const [showHome, setShowHome] = useState(false);
  const navigateToHome = () => {
    setShowHome(true);
  };
  return (
    <>
      {!showHome && (
        <div className="welcome-container">
          <div className="log-out-container">
            <button className="log-out"> Log Out</button>
          </div>
          <div className="main-title">Oops Naveen,</div>
          <div className="sub-title">didn’t find your payment mails</div>
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
      {showHome && <Home />}
    </>
  );
}
