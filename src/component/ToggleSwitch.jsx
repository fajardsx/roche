import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/togglestyle.css";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  const triggletoggle = () => {
    console.log("switch");
    setToggle(!toggle);
  };
  return (
    <button onClick={triggletoggle} className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>ID</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>EN</span>
        </div>
      </div>
      <div className="wrg-toggle-circle">
        <span>{`${toggle ? "EN" : "ID"}`}</span>
      </div>
    </button>
  );
};

export default ToggleButton;
