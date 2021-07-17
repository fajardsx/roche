import TinySlider from "tiny-slider-react";
import "../../styles/component.css";

import menu1 from "../../assets/First_patient_imaget.png"
import menu2 from "../../assets/Diagnosis_icon.png"
import menu3 from "../../assets/treatment_decision_icon.png"

const imgs = [
  menu1,
  menu2,
  menu3,
  menu3
];
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const imgStyles = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: 8,
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
  slideBy: "page",
  swipeAngle: false,
  fixedWidth:100,
  speed: 400,
};
const clickEvent = (e,props) => {
  console.log(window.location.origin);
  var titles="First Patient Visit"
  switch (e) {
    case 0:
      titles="First Patient Visit"
      break;
    case 1:
      titles="Diagnosis"
      break;
    case 2:
      titles="Treatment Decision"
      break;
    case 3:
      titles="On Going Treatment"
      break;
  }
  props.history.push(`/journey/${e}/${titles}`);
  // e.preventDefault();
  // window.location.href = window.location.origin+"/#/journey";
};
const CategoryComponent = (props) => {
  return (
    <div style={{ backgroundColor: "transparent", padding: "0px 10px 20px 10px" }}>
      <div className="componentHeader">Your Patient Journey</div>
      <TinySlider settings={settings}>
        {imgs.map((el, index) => (
          <div onClick={(e) => clickEvent(index,props)} key={index} style={{ position: "relative" }}>
            <img
              className={`tns-lazy-img`}
              src={loadingImage}
              data-src={el}
              alt="Catergory"
              style={imgStyles}
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export default CategoryComponent;
