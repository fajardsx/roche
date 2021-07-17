import React from "react";
import "../styles/googlebtn.css";
import { useRouteMatch } from "react-router-dom";
import logoGoogle from "../assets/icons/icongoogle.png";
import logoFacebook from "../assets/icons/iconfacebook.png";
import logoEmail from "../assets/icons/emailicon.png";

const GoogleBtn = (props) => {
  return (
    <div
      onClick={() => {
        console.log("Click google");
      }}
      class="g-sign-in-button">
      <div class="content-wrapper">
        <div class="logo-wrapper">
          <img src={logoGoogle} />
        </div>
      </div>
    </div>
  );
};
export const FacebookBtn = (props) => (
  <div
    onClick={() => {
      console.log("Click facebook");
    }}
    class="f-sign-in-button">
    <div class="content-wrapper">
      <div class="logo-wrapper">
        <img src={logoFacebook} />
      </div>
    </div>
  </div>
);

export const EmailBtn = (props) => (
  <div
    onClick={() => {
      console.log("Click email");
      props.onClick();
    }}
    class="email-sign-in-button">
    <div class="content-wrapper">
      <div class="logo-wrapper">
        <img src={logoEmail} />
      </div>
      <span class="text-container">
        <span>Sign in with Email</span>
      </span>
    </div>
  </div>
);

export default GoogleBtn;
