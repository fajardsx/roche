import TinySlider from "tiny-slider-react";
import { AiOutlineRight } from "react-icons/ai";
import "../../styles/component.css";
import iconplay from "../../assets/icons/icon_playvideo.svg";
import iconBookmark from "../../assets/icons/iconbookmark.svg";
const clickEvent = (slide) => {
  console.log(slide);
};
export const HorizontalCellJourneyVideo = () => {
    return (
      <div className="joureny-video-cell">
        <div className="joureny-video-image-container">
          <div className="joureny-video-icon">
            <img src={iconplay} width="24" height="24" className="d-inline-block align-top" />
          </div>
        </div>
        <div className="joureny-video-body-container">
          <div id="title">FIRST PATIENT VISIT</div>
          <div id="description">
          Do Health Care Deep Breathing Exercise
          </div>
        </div>
        <div className="joureny-video-date-container">
        <img src={iconBookmark} width="18" height="16" className="d-inline-block align-top" />
        </div>
      </div>
    );
  };
export const HorizontalCellJourney = () => {
    return (
      <div className="joureny-video-cell">
        <div className="joureny-video-image-container">
          <div className="joureny-video-icon">
           
          </div>
        </div>
        <div className="joureny-video-body-container">
          <div id="title">FIRST PATIENT VISIT</div>
          <div id="description">
          Do Health Care Deep Breathing Exercise
          </div>
        </div>
        <div className="joureny-video-date-container">
        <img src={iconBookmark} width="18" height="16" className="d-inline-block align-top" />
        </div>
      </div>
    );
  };