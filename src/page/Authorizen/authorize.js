import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../../actions/action";
import "../../App.css";

class Authorize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fullscreen: false,
      loading: false,
      txtAuthor: "",
    };
  }
  componentDidMount() {
    console.log("Auth", this.props);
    setTimeout(() => {
      if (this.props.authType === false || this.props.authType === undefined) {
        //this.props.history.push("/login");
        this.props.history.push("/permission");
      } else {
        this.props.history.push("/home");
      }
    }, 2000);
  }
  render() {
    return <div className={"AuthorBg"}></div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
