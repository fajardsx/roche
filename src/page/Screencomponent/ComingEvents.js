import TinySlider from "tiny-slider-react";
import { AiOutlineRight } from "react-icons/ai";
import "../../styles/component.css";

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
  height: "120px",
  objectFit: "cover",
  borderRadius: 10,
};
const loadingImage =
  "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: false,
  gutter: 5,
  controls: false,
  items: 2,
  fixedWidth: 250,
  slideBy: "page",
  swipeAngle: false,
};
const clickEvent = (slide) => {
  console.log(slide);
};
const ComingeventComponent = () => {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "10px 10px 15px 10px",marginBottom:"10px" }}>
      <div className="componentHeader">
        Events
        <AiOutlineRight size="18" color="#64184F" />
      </div>

      <TinySlider settings={settings} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className={`tns-lazy-img`}
              src={loadingImage}
              data-src={el}
              alt=""
              style={imgStyles}
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export default ComingeventComponent;
