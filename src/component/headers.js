import React from "react";
import { Nav, Navbar, Form, Button, Col, Row, Container, FormControl } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import "../App.css";
import logo from "../assets/icons/iconroche.svg";
import defaultavatar from "../assets/default_avatar.jpg";
import { RiArrowLeftSLine } from "react-icons/ri";
import ToggleButton from "./ToggleSwitch";
import icon_search from "../assets/icons/search_icon.svg";

const AppHeaders = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Navbar.Brand href={`${props.page}`}>
        <img src={logo} width="40" height="35" className="d-inline-block align-top" />
        <Navbar.Text className="titleheader" style={{ color: "#64184F" }}>
          {"Lung Cancer Care"}
        </Navbar.Text>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={props.page} className="mr-auto navbarCustom">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
      <ToggleButton />
    </Navbar>
  );
};
export default AppHeaders;
//
export const TabAppHeaders = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <Navbar collapseOnSelect expand="md" sticky="top" id="normal">
      <Navbar.Text className="tabtitleheader" style={{ color: "#000000" }}>{`${
        props.titles ? props.titles : "Header"
      }`}</Navbar.Text>
    </Navbar>
  );
};
//
export const BackAppHeaders = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <Navbar className="header-personaldata-container" collapseOnSelect expand="md" sticky="top" variant="light" id="normal">
      <Container>
        <div id="header">
          <Button onClick={props.handleSubmit} className="back-btn-header" type="submit">
            <RiArrowLeftSLine size="21" color="#64184f" />
          </Button>
          <Navbar.Text className="backtitleheader" style={{ color: "#000000" }}>{`${
            props.titles ? props.titles : "Header"
          }`}</Navbar.Text>
        </div>
      </Container>
    </Navbar>
  );
};
//
export const JournyAppHeaders = (props) => {
  const { url, path } = useRouteMatch();
  return (
    <Navbar
      className="header-journey-container"
      expand="md"
      sticky="top"
      variant="light"
      id="journey">
      <Container>
        <div id="header">
          <Button onClick={props.handleSubmit} className="back-btn-header" type="submit">
            <RiArrowLeftSLine size="21" color="#ffffff" />
          </Button>

          <Navbar.Text className="header-journey-container-title" style={{ color: "#ffffff" }}>{`${
            props.titles ? props.titles : "Header"
          }`}</Navbar.Text>
        </div>

        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ borderRadius: "20px", margin: "10px 0px" }}
        />
        <button className="header-icon-search">
          <img src={icon_search} width="18" height="18" />
        </button>
      </Container>
    </Navbar>
  );
};
