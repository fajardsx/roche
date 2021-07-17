import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../../actions/action";
import Toast from "react-bootstrap/Toast";
import Constant, { validateEmail } from "../../constant/Constant";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RESTKEY } from "../../services/keys";
import { callAPIFull } from "../../services/api";
import GoogleBtn, { EmailBtn, FacebookBtn } from "../../component/socialmediabtn";
import OtpInput from "react-otp-input";
import "../../App.css";
import footerline from "../../assets/footer-line.svg";
import successicon from "../../assets/iconsuccess.png";
import failedicon from "../../assets/iconalert.png";
import { FooterRoche } from "../Screencomponent/ContentComponent";
class SuccessSignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueemail: "",
      valuepassword: "",
      show: false,
      notification: {
        title: "",
        body: "",
      },
    };

    this.otphandleChange = this.otphandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showToast = (title = "", desc = "") => {
    this.setState({
      show: true,
      notification: {
        title: title,
        body: desc,
      },
      modeMenu: 0,
      otp: "",
    });
  };

  otphandleChange(value) {
    this.setState({ otp: value });
  }
  handleSubmit(event) {
    //this.props.history.push("/app");
    this.props.history.push("/login/profil");
    //this.showToast("Failed SignUp", "Please check your email and passowrd field");
  }
  // API
  async sendLogin() {
    const { valueemail, valuepassword } = this.state;
    try {
      const additionalHeaders = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        //Authorization: "Bearer " + this.props.token,
      };
      // let body = new FormData();
      // body.append("email", valueemail);
      // body.append("password", valuepassword);

      // let result = await callAPI(
      //   Constant.P,
      //   RESTKEY.API.login_rsa,
      //   body,
      //   additionalHeaders
      // );
      const result = await callAPIFull(
        Constant.G,
        "https://ab649200b252.ngrok.io/botaps01/custombot.php?command=/cco4h%20btcidr",
        "",
        additionalHeaders
      );
      console.log("sendLogin ", result);
    } catch (error) {
      console.log("error ", error);
    }
  }
  //
  menuLogin = () => (
    <div
      style={{
        paddingTop: "20px",
      }}>
      <Row className="mainmenu" noGutters>
        <Col>
          <GoogleBtn />
        </Col>
        <Col>
          <FacebookBtn />
        </Col>
      </Row>

      {/* <Col>
        <EmailBtn onClick={this.handleToEmail.bind(this)} />
      </Col> */}
    </div>
  );
  addFormEmail = () => (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          style={{ textAlign: "center" }}
          onChange={this.emailhandleChange}
        />
        {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
      </Form.Group>
    </Form>
  );
  addToast = () => {
    const { show, notification } = this.state;
    return (
      <Toast
        onClose={() => this.setState({ show: false })}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
          <img src={notification.image} className="rounded mr-2" alt="" />
          {notification.body}
        </Toast.Body>
      </Toast>
    );
  };
  //
  render() {
    return (
      <Container fluid={"md"} className="App-Container p-0">
        <Col className="login-container">
          <div className="signin-result-icon ">
            <img src={successicon} />
          </div>
          <div style={{ fontWeight: "bold", color: "#64184f" }}>
            <h4>Congratulations</h4>
          </div>

          <div style={{ fontWeight: "bold", color: "#64184f" }}>{`dr. Sharon Angel`}</div>
          <div style={{ fontSize: "calc(5px + 2vmin)", padding: "50px 0px 20px 0px" }}>
            Welcome to Lung Cancer Care
          </div>
          <div
            className="submit-btn-container"
            style={{ justifyContent: "center", padding: "40px 0 0 0" }}>
            <Button
              onClick={this.handleSubmit}
              className="submit-btn"
              style={{ aspectRatio: "0", justifyContent: "center", height: "6vh", width: "80%" }}
              type="submit">
              Done
            </Button>
          </div>
        </Col>
        <div className="footers-img">
          <img style={{ width: "100%", height: "100%" }} src={footerline} />
        </div>
        {this.addToast()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authType: state.authType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    rotateAction: (data) =>
      dispatch({
        type: ACTION_TYPE.UPDATE_AUTH,
        value: data,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SuccessSignUpScreen);
