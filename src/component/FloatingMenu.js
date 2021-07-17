import React, { Component } from "react";
import "../styles/floatingbtn.css";
export class FloatingMenu extends Component {
  handleClick = () => {
    console.log("floating click");
  };
  render() {
    return (
      <div className={"floating-menu"}>
        <div onClick={this.handleClick.bind(this)} className="floating-menu-item"></div>
      </div>
    );
  }
}
