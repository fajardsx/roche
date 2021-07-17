import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../styles/togglestyle.css";

const NotificationToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  const triggletoggle = () => {
    console.log("switch");
    setToggle(!toggle);
  };
  return (
    <button
      onClick={triggletoggle}
      className={`notif-toggle ${toggle ? "notif-toggle--checked" : ""}`}>
      <div className="notif-toggle-container">
        <div className="notif-toggle-check">
          <span>Testing Voucher</span>
        </div>
        <div className="notif-toggle-uncheck">
          <span>Feeds</span>
        </div>
      </div>
      <div className="notif-toggle-circle">
        <span>{`${toggle ? "Feeds" : "Testing Voucher"}`}</span>
      </div>
    </button>
  );
};

export default NotificationToggleButton;
