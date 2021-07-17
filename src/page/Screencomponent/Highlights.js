import TinySlider from "tiny-slider-react";
import "../../styles/component.css";
const imgs = [
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg",
  "http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg",
];
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  justifyContent: "center",
};

const imgStyles = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
};
const loadingImage =
  "data:image/gif;base64,\
    R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: false,
  gutter: 10,
  controls: false,
  items: 1,
  center: false,
  slideBy: "page",
  swipeAngle: false,
};
const clickEvent = (slide) => {
  console.log(slide);
};
const HiglightComponent = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="componentHeader " style={{ padding: "0px 10px" }}>
        Highlights
      </div>
      <TinySlider settings={settings} onInit={clickEvent}>
        {imgs.map((el, index) => (
          <div key={index} className="imghighlightcontanier">
            <div id="highligthContent">
              <img
                className={`tns-lazy-img`}
                src={loadingImage}
                data-src={el}
                alt=""
                style={imgStyles}
              />
              <div className={"highlight-cell-content-container"}>
                <div id="title">Disease Prevention and Public Health Journal</div>
                <div id="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </div>
              </div>
            </div>
          </div>
        ))}
      </TinySlider>
    </div>
  );
};

export default HiglightComponent;
