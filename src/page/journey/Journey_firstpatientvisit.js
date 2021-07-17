import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import "../../App.css";
import Banners from "../../component/Banners";
import { JournyAppHeaders } from "../../component/headers";
import Category from "../Screencomponent/Category";
import Comingevent from "../Screencomponent/ComingEvents";
import Highlights from "../Screencomponent/Highlights";
import {
  ContentComponentJournal,
  ContentComponentJournalHorizontal,
  FindMedicalComponent,
} from "../Screencomponent/ContentComponent";
import Footer from "../Screencomponent/footers";
import Mainmenu from "../Screencomponent/Mainmenu";

import iconpatientsupport from "../../assets/icons/iconpatientsupport.svg";
import iconfreetesting from "../../assets/icons/iconfreetesting.svg";
import iconLabcontact from "../../assets/icons/iconlabcontact.svg";
import icontreatment from "../../assets/icontreatment.png";
import iconadversevent from "../../assets/iconadversevent.png";
//banner

import bannerFirstPatient from "../../assets/first_patient.svg";
import bannerDiagnosis from "../../assets/dignosis.svg";
import bannerTreatment from "../../assets/trearment_decision.svg";
import bannerOnGoing from "../../assets/ongoingtreatment.svg";
class JourneyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fullscreen: false,
      loading: false,
      title: "First Patient Visit",
      bannerImage: bannerFirstPatient,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    window.scrollTo(0, 0);
    this.initBanner(match.params.id)
  }
  handleClickBack() {
    const { history } = this.props;
    history.goBack();
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
  initBanner = (id) => {
    console.log(id);
    if (id == 0) {
      this.setState({
        bannerImage: bannerFirstPatient,
      });
    } else if (id == 1) {
      this.setState({
        bannerImage: bannerDiagnosis,
      });
    } else if (id == 2) {
      this.setState({
        bannerImage: bannerTreatment,
      });
    } else if (id == 3) {
      this.setState({
        bannerImage: bannerOnGoing,
      });
    }
  };
  //
  initContent = (id) => {
    console.log(id);
    if (id == 1) {
      return (
        <div>
          <FindMedicalComponent />
          <div className="journey-patient-support-container">
            <div className="journey-patient-support-header">Free Testing Access</div>
            <div className="journey-patient-support-body patientbg">
              <div id="icon">
                <img
                  src={iconfreetesting}
                  width="93"
                  height="102"
                  className="d-inline-block align-middle"
                />
              </div>
              <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do it sim eiusmod
                <div
                  className="journey-patient-support-container-button"
                  style={{ padding: "0 0 0 0" }}>
                  <Button
                    //onClick={this.handleSubmit}
                    className="submit-btn"
                    style={{
                      aspectRatio: "0",
                      justifyContent: "center",
                      height: "32px",
                      width: "80%",
                    }}
                    type="submit">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-patient-support-container">
            <div className="journey-patient-support-header">Laboratory Contact</div>
            <div className="journey-patient-support-body">
              <div id="icon">
                <img
                  src={iconLabcontact}
                  width="94"
                  height="125"
                  className="d-inline-block align-middle"
                />
              </div>
              <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do it sim eiusmod
                <div
                  className="journey-patient-support-container-button"
                  style={{ padding: "0 0 0 0" }}>
                  <Button
                    //onClick={this.handleSubmit}
                    className="submit-btn"
                    style={{
                      aspectRatio: "0",
                      justifyContent: "center",
                      height: "32px",
                      width: "80%",
                    }}
                    type="submit">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (id == 2) {
      return (
        <div>
          <FindMedicalComponent />
          <div className="journey-patient-support-container">
            <div className="journey-patient-support-header">Patient Support</div>
            <div className="journey-patient-support-body">
              <div id="icon">
                <img
                  src={iconpatientsupport}
                  width="89"
                  height="95"
                  className="d-inline-block align-middle"
                />
              </div>
              <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do it sim eiusmod
                <div
                  className="journey-patient-support-container-button"
                  style={{ padding: "0 0 0 0" }}>
                  <Button
                    //onClick={this.handleSubmit}
                    className="submit-btn"
                    style={{
                      aspectRatio: "0",
                      justifyContent: "center",
                      height: "32px",
                      width: "80%",
                    }}
                    type="submit">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (id == 3) {
      return (
        <div>
          <FindMedicalComponent />
          <div className="journey-patient-support-container">
            <div className="journey-patient-support-header">Treatment Management</div>
            <div className="journey-patient-support-body">
              <div id="icon">
                <img
                  src={icontreatment}
                  width="93"
                  height="88"
                  className="d-inline-block align-middle"
                />
              </div>
              <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do it sim eiusmod
                <div
                  className="journey-patient-support-container-button"
                  style={{ padding: "0 0 0 0" }}>
                  <Button
                    //onClick={this.handleSubmit}
                    className="submit-btn"
                    style={{
                      aspectRatio: "0",
                      justifyContent: "center",
                      height: "32px",
                      width: "80%",
                    }}
                    type="submit">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-patient-support-container">
            <div className="journey-patient-support-header">Adverse Event Report</div>
            <div className="journey-patient-support-body">
              <div id="icon">
                <img
                  src={iconadversevent}
                  width="99"
                  height="80"
                  className="d-inline-block align-middle"
                />
              </div>
              <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do it sim eiusmod
                <div
                  className="journey-patient-support-container-button"
                  style={{ padding: "0 0 0 0" }}>
                  <Button
                    //onClick={this.handleSubmit}
                    className="submit-btn"
                    style={{
                      aspectRatio: "0",
                      justifyContent: "center",
                      height: "32px",
                      width: "80%",
                    }}
                    type="submit">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  //
  render() {
    const { data, fullscreen, loading } = this.state;
    const backgroundImage = data ? { backgroundImage: `url(${data})` } : null;
    const previewPic = ["preview", fullscreen ? "preview--fullscreen" : ""].join(" ");
    return (
      <>
        <JournyAppHeaders
          handleSubmit={this.handleClickBack.bind(this)}
          page={`#/home`}
          titles={this.props.match.params.title}
        />
        <Container
          fluid={"md"}
          className="App-Container p-0"
          style={{ backgroundColor: "#F4F4F4" }}>
          <div className="header-journey-banner-container">
            <div id="row">
              <div className="header-journey-banner-container-banner">
                <img
                  src={this.state.bannerImage}
                  width="90%"
                  height="100%"
                  className="d-inline-block align-bottom"
                />
              </div>
              <div className="header-journey-banner-container-banner-title">
                <div id="title">{this.props.match.params.title}</div>
              </div>
            </div>
          </div>
          {this.initContent(this.props.match.params.id)}
          <ContentComponentJournal
            titles={"Journal"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
          />
          <ContentComponentJournalHorizontal
            titles={"Video"}
            type={"video"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
          />
          <ContentComponentJournalHorizontal
            titles={"Lung Cancer Education Material"}
            type={"presentation"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisc."}
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
        </Container>
      </>
    );
  }
}
export default JourneyHome;
