import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import "../App.css";
import Banners from "../component/Banners";
import AppHeaders from "../component/headers";
import Category from "./Screencomponent/Category";
import Comingevent from "./Screencomponent/ComingEvents";
import Highlights from "./Screencomponent/Highlights";
import ContentComponent from "./Screencomponent/ContentComponent";
import Footer from "./Screencomponent/footers";
import Mainmenu from "./Screencomponent/Mainmenu";
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
const settingsVideo = {
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
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fullscreen: false,
      loading: false,
    };
  }
  componentDidMount() {
    const { match, history } = this.props;
    console.log("Home ",this.props);
    window.scrollTo(0, 0);
    if (match.url === "/home") {
      //window.history.pushState(null, document.title, window.location.href);
      // window.addEventListener("popstate", function (event) {
      //   window.history.pushState(null, document.title, window.location.href);
      // });
      const lasthistory = this.props.history.entries
      history[0] = lasthistory
      history.length = 1
    }
  }
  handlePreviewClick() {
    const { data, fullscreen } = this.state;
    if (!data) {
      return;
    }
    this.setState({ fullscreen: !fullscreen });
  }
  handleFileChange(event) {
    const { target } = event;
    const { files } = target;
    console.log(files);
    if (files && files[0]) {
      var reader = new FileReader();
      reader.onloadstart = () => this.setState({ loading: true });
      reader.onload = (resulthevent) => {
        console.log(resulthevent);
        this.setState({
          data: resulthevent.target.result,
          loading: false,
        });
      };
      reader.readAsDataURL(files[0]);
    }
  }

  //
  render() {
    const { data, fullscreen, loading } = this.state;
    const backgroundImage = data ? { backgroundImage: `url(${data})` } : null;
    const previewPic = ["preview", fullscreen ? "preview--fullscreen" : ""].join(" ");
    return (
      <>
        <AppHeaders page={`#/home`} />
        <Banners />
        <Container fluid={"md"} className="App-Container p-0" style={{backgroundColor:"#F9F9F9"}}>
          <Mainmenu />
          <Category {...this.props} />
          <Comingevent />
          <Highlights />
          <ContentComponent
            titles={"Journal"}
            setting={settingsJurnal}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
          />
          <ContentComponent
            titles={"Video"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
            setting={settingsVideo}
            imageStyle={"imgStyles2"}
          />
          <ContentComponent
            titles={"Lung Cancer Education Material"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
            setting={settingsVideo}
            imageStyle={"imgStyles3"}
          />
          {/* <Row noGutters>
            <Col>
              <div>
                <input
                  id="picm"
                  type="file"
                  className={"press"}
                  accept="image/*"
                  onChange={this.handleFileChange.bind(this)}
                />
                <div
                  className={previewPic}
                  style={backgroundImage}
                  onClick={this.handlePreviewClick.bind(this)}>
                  {!data && !loading && <label htmlFor="picm">Choose File</label>}
                  {loading && <span>Loading...</span>}
                </div>
              </div>
            </Col>
          </Row> */}
          <Footer />
        </Container>
      </>
    );
  }
}
export default home;
