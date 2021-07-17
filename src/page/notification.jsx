import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Banners from "../component/Banners";
import AppHeaders, { BackAppHeaders, TabAppHeaders } from "../component/headers";
import Footer from "./Screencomponent/footers";
import NotificationCell from "./Screencomponent/notificationcell";
import NotificationToggleButton from "./Screencomponent/NotificationTab";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fullscreen: false,
      loading: false,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    console.log("notification ", match);
  }

  //
  render() {
    const { data, fullscreen, loading } = this.state;
    const backgroundImage = data ? { backgroundImage: `url(${data})` } : null;
    const previewPic = ["preview", fullscreen ? "preview--fullscreen" : ""].join(" ");
    return (
      <>
        <TabAppHeaders titles={"Notification"} />
        <div className="notification-toggle-container">
          <NotificationToggleButton />
        </div>
        <Container fluid={"md"} className="App-Container p-0">
          <div>
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
            <NotificationCell />
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Notification;
