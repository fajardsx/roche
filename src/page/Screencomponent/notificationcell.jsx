import TinySlider from "tiny-slider-react";
import { AiOutlineRight } from "react-icons/ai";
import "../../styles/component.css";
import navHome from "../../assets/icons/navihome.svg";
const clickEvent = (slide) => {
  console.log(slide);
};
const NotificationCell = () => {
  return (
    <div className="tab-notification-cell">
      <div className="tab-notification-icon-container">
        <div className="tab-notification-icon">
          <img src={navHome} width="18" height="16" className="d-inline-block align-top" />
        </div>
      </div>
      <div className="tab-notification-body-container">
        <div id="title">New Journal Posted!</div>
        <div id="description">
          5 Simple techniques that can help you to breathe yourself healthy
        </div>
      </div>
      <div className="tab-notification-date-container">
        <div id="time">10.00</div>
        <div id="alert"></div>
      </div>
    </div>
  );
};

export default NotificationCell;
