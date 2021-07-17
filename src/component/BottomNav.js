import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill } from "react-icons/ri";
import {
  AiOutlineUser,
  AiOutlineBell,
  AiTwotoneBell,
  AiOutlineAppstore,
  AiFillAppstore,
  AiFillCalendar,
  AiOutlineCalendar,
} from "react-icons/ai";
import "../styles/bottomnavstyle.css";

import navHome from "../assets/icons/navihome.svg";
import navNotif from "../assets/icons/navinotif.svg";
import navProfil from "../assets/icons/naviprofil.svg";
import navEvent from "../assets/icons/navievent.svg";

const BottomNav = (props) => {
  const history = useHistory();
  const [activeTabs, setActiveTabs] = useState(props.name);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        history.push(`/home`);
        break;
      case "notification":
        history.push(`/notification`);
        break;
    }
  }, [activeTabs, history]);
  const gotoTab = (value) => {
    setActiveTabs(value);
  };

  return (
    <div className="bottom-nav-container" >
      <div className="bottom-nav">
        <button
          onClick={() => {
            gotoTab("home");
          }}
          className="btn-tab">
          {activeTabs === "home" ? (
            <img src={navHome} width="18" height="16" className="d-inline-block align-top" />
          ) : (
            <img src={navHome} width="18" height="16" className="d-inline-block align-top" />
          )}
          Home
        </button>
        <button
          onClick={() => {
            gotoTab("notification");
          }}
          className="btn-tab">
          {activeTabs === "notification" ? (
            <img src={navNotif} width="18" height="16" className="d-inline-block align-top" />
          ) : (
            <img src={navNotif} width="18" height="16" className="d-inline-block align-top" />
          )}
          Notification
        </button>

        <button className="btn-tab">
          {activeTabs === "certificate" ? (
            <img src={navEvent} width="18" height="16" className="d-inline-block align-top" />
          ) : (
            <img src={navEvent} width="18" height="16" className="d-inline-block align-top" />
          )}
          Certificate
        </button>
        <button className="btn-tab">
          {activeTabs === "profile" ? (
            <img src={navProfil} width="18" height="16" className="d-inline-block align-top" />
          ) : (
            <img src={navProfil} width="18" height="16" className="d-inline-block align-top" />
          )}
          Profile
        </button>
        <button className="btn-tab">
          {activeTabs === "more" ? (
            <AiOutlineAppstore size="18" color="#64184F" onClick={() => setActiveTabs("home")} />
          ) : (
            <AiOutlineAppstore size="18" color="#A2A2A2" onClick={() => setActiveTabs("home")} />
          )}
          More Info
        </button>
      </div>
          <div className="bottom-nav-title">For Healthcare Professionals Only - 11234</div>
    </div>
  );
};

export default BottomNav;
