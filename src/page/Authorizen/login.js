import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../../actions/action";
import Toast from "react-bootstrap/Toast";
import AppHeaders from "../../component/headers";
import Constant, { validateEmail } from "../../constant/Constant";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RESTKEY } from "../../services/keys";
import { callAPIFull } from "../../services/api";
import GoogleBtn, { EmailBtn, FacebookBtn } from "../../component/socialmediabtn";
import { RiArrowRightLine } from "react-icons/ri";
import logotitle from "../../assets/titlelogo.png";
import footerline from "../../assets/footer-line.svg";
import { FooterRoche } from "../Screencomponent/ContentComponent";

class LogInScreen extends Component {
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

    this.emailhandleChange = this.emailhandleChange.bind(this);
    this.passhandleChange = this.passhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { match, history } = this.props;
    console.log("login ", match);
    if (match.url === "/login") {
      window.history.pushState(null, document.title, window.location.href);
    }
  }
  showToast = (title = "", desc = "") => {
    this.setState({
      show: true,
      notification: {
        title: title,
        body: desc,
      },
      modeMenu: 0,
    });
  };

  emailhandleChange(event) {
    this.setState({ valueemail: event.target.value });
  }
  passhandleChange(event) {
    this.setState({ valuepassword: event.target.value });
  }
  handleSubmit(event) {
    const { valueemail, valuepassword } = this.state;
    console.log(`${valueemail} , ${valuepassword}`);
    console.log(event);
    //this.sendLogin();
    if (valueemail.length > 0) {
      console.log(validateEmail(valueemail));
      if (validateEmail(valueemail) === true) {
        //event.preventDefault();
        this.props.history.push("/home");
      } else {
        this.showToast("Failed Sign In", "Email not correct");
      }
    } else {
      this.showToast("Failed Sign In", "Please check your email field");
    }
  }
  handleToEmail() {
    this.props.history.push("/login/email");
  }
  handleSignup() {
    this.props.history.push("/login/signup");
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
          onEnded={this.sendLogin}
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
        <Col className="login-container ">
          <div className="logo">
            <img src={logotitle} height="31" width="164"/>
          </div>
          <div className="TitleH">Welcome back</div>
          <div style={{ fontSize: "calc(1.5vw + 2vmin)" }}>Please log in to your account</div>
          {this.menuLogin()}
          <div
            style={{
              padding: "10px 0",
              margin: "0 auto",
              alignItems: "center",
              display: "block",
            }}>
            <div className="orline">
              <span>or</span>
            </div>
          </div>
          {this.addFormEmail()}
          <div className="submit-btn-container">
            <h5>Sign In</h5>
            <Button
              onClick={this.handleSubmit}
              className="submit-btn submit-btn-panah "
              type="submit">
              <RiArrowRightLine size="18" color="#fff" />
            </Button>
          </div>
          <div className="register-btn">
            I'am new User. <span onClick={this.handleSignup.bind(this)}>Register</span>
          </div>
        </Col>

        <div className="footers-img">
          <FooterRoche />
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
export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
