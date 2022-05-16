import React, { Component } from "react";
import SpherePanel from "./SpherePanel";
import CameraPanel from "./CameraPanel";
import "./index.css";

export default class Panel extends Component {
  render() {
    return (
      <div className="control">
        <ul className="control-list">
          <SpherePanel />
          <CameraPanel />
        </ul>
      </div>
    );
  }
}
