import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../../actions/action";
import "../../App.css";
import footerline from "../../assets/footer-line.svg";
import loadingsvg from "../../assets/x33 5 loading.svg";
import { FooterRoche } from "../Screencomponent/ContentComponent";

class PermissionScene extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      if (this.props.authType === false || this.props.authType === undefined) {
        //this.props.history.push("/login");
        this.props.history.push("/login");
      }
    }, 2000);
  }
  render() {
    return (
      <>
        <Container fluid={"md"} className="App-Container p-0 PermissionBg">
          <Col className="permission-container ">
            <div className="center">
              <div className="spinner-loader">
                <img style={{ width: "100%", height: "100%" }} src={loadingsvg} />
              </div>
            </div>

            <div className="titlePermission ">
              Please enable pop-ups for Lungclinic.com to sign in / sign up with Google or Facebook
            </div>
          </Col>
          <div className="footers-img">
            <FooterRoche />
            <img style={{ width: "100%", height: "100%" }} src={footerline} />
          </div>
        </Container>
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(PermissionScene);
