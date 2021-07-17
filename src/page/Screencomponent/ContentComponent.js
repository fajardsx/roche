import TinySlider from "tiny-slider-react";
import { AiOutlineRight } from "react-icons/ai";
import "../../styles/component.css";
import { Row, Col } from "react-bootstrap";
import { HorizontalCellJourney, HorizontalCellJourneyVideo } from "./CellComponent";

import hospitalDirectory from "../../assets/hospital_directory.png";
import pharmacyDirectory from "../../assets/pharmacy_directory.png";

const imgs = [
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
];
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const imgStyles = {
  width: "100%",
  height: "170px",
  objectFit: "cover",
  borderRadius: 5,
};
const imgStylesFind = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: 5,
};
const loadingImage =
  "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: false,
  gutter: 8,
  controls: false,
  items: 3,
  fixedWidth: 130,
  slideBy: "page",
  swipeAngle: false,
};
const settingsFind = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: false,
  gutter: 5,
  controls: false,
  items: 2,
  fixedWidth: 100,
  slideBy: "page",
  swipeAngle: false,
};
const settingsJurnal = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: false,
  gutter: 10,
  controls: false,
  items: 3,
  fixedWidth: 115,
  slideBy: "page",
  swipeAngle: false,
};
const clickEvent = (slide) => {
  console.log(slide);
};
const ContentComponent = (props) => {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "10px" }}>
      <div className="componentContentHeader">
        <div>
          {props.titles}
          <div id="desc">{props.description}</div>
        </div>

        <AiOutlineRight size="18" color="#64184F" />
      </div>

      <TinySlider settings={props.setting ? props.setting : settings} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} className="componentContentContainer">
            <img
              className={`tns-lazy-img ${props.imageStyle ? props.imageStyle : "imgStyles1"}`}
              src={loadingImage}
              data-src={el}
              alt=""
              //style="${props.imageStyle ? props.imageStyle : 'imgStyles1'}"
            />
            <div id="titles">Do healthcare deep breathing exe</div>
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export default ContentComponent;

export const ContentComponentJournal = (props) => {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "10px" }}>
      <div className="componentContentHeader">
        <div>
          {props.titles}
          <div id="desc">{props.description}</div>
        </div>

        <AiOutlineRight size="18" color="#64184F" />
      </div>

      <TinySlider settings={settingsJurnal} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} className="componentContentContainer">
            <img
              className={`tns-lazy-img ${props.imageStyle ? props.imageStyle : "imgStyles1"}`}
              src={loadingImage}
              data-src={el}
              alt=""
              //style="${props.imageStyle ? props.imageStyle : 'imgStyles1'}"
            />
            <div id="titles2">TREATMENT DECISION</div>
            <div id="desc2">{props.description}</div>
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export const ContentComponentJournalHorizontal = (props) => {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "0px 10px", margin: "10px 0px" }}>
      <div className="componentContentHeader">
        <div>
          {props.titles}
          <div id="desc">{props.description}</div>
        </div>

        <AiOutlineRight size="18" color="#64184F" />
      </div>
      {props.type == "video" && (
        <div>
          <HorizontalCellJourneyVideo />
          <HorizontalCellJourneyVideo />
          <HorizontalCellJourneyVideo />
          <HorizontalCellJourneyVideo />
          <HorizontalCellJourneyVideo />
        </div>
      )}
      {props.type == "presentation" && (
        <div>
          <HorizontalCellJourney />
          <HorizontalCellJourney />
          <HorizontalCellJourney />
          <HorizontalCellJourney />
          <HorizontalCellJourney />
        </div>
      )}
    </div>
  );
};

const imgDirectory = [hospitalDirectory, pharmacyDirectory];

export const FindMedicalComponent = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "0px 10px 10px 10px",
        margin: "0px 0px 10px 0px",
      }}>
      <div className="componentContentHeader">
        <div>
          Find Your Medical Solution
          <div id="desc">Lorem ipsum dolor sit amet, consectetur adipisc.</div>
        </div>
      </div>
      <div className="find-medical-menu">
        {imgDirectory.map((el, index) => (
          <button>
            <img
              src={el}
              alt=""
              style={imgStylesFind}
            />
          </button>
        ))}
      </div>
      {/* <TinySlider settings={settingsFind} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className={`tns-lazy-img`}
              src={loadingImage}
              data-src={el}
              alt=""
              style={imgStylesFind}
            />
          </div>
        ))}
      </TinySlider> */}
    </div>
  );
};
export function FooterRoche(params) {
  return (
    <>
      <div className="footers-roche-container">
        <div className="footers-roche-title">Powered by</div>
        <div className="footers-roche-icon" />
      </div>
      <div className="footers-roche-desc">For Healthcare Professionals Only - 11234</div>
    </>
  );
}
