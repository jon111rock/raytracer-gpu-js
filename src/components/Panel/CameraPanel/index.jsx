import React, { Component } from "react";
import PubSub from "pubsub-js";

import { UPDATE_CAMERA } from "../../../event-types";
import * as Camera from "../../Renderer/Objects/Camera";

export default class CameraPanel extends Component {
  constructor(props) {
    super();

    this.state = {
      cameraData: Camera.defaultSetting,
    };
  }

  save = (target) => {
    let ary;
    switch (target.name) {
      case "lookat-x":
        ary = { ...this.state.cameraData };
        ary.lookat[0] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "lookat-y":
        ary = { ...this.state.cameraData };
        ary.lookat[1] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "lookat-z":
        ary = { ...this.state.cameraData };
        ary.lookat[2] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "lookfrom-x":
        ary = { ...this.state.cameraData };
        ary.lookfrom[0] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "lookfrom-y":
        ary = { ...this.state.cameraData };
        ary.lookfrom[1] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "lookfrom-z":
        ary = { ...this.state.cameraData };
        ary.lookfrom[2] = Number(target.value);
        this.setState({ cameraData: ary });
        break;
      case "fov":
        ary = { ...this.state.cameraData };
        ary.vfov = Number(target.value);
        this.setState({ cameraData: ary });
        break;
    }

    PubSub.publish(UPDATE_CAMERA, this.state.cameraData);
  };

  render() {
    const { lookat, lookfrom, vup, vfov } = this.state.cameraData;

    return (
      <div>
        <li className="control-item">
          <h2>Camera</h2>
          <ul className="attribute-list">
            <li className="attribute-item">
              <h3>lookAt</h3>
              <ul className="position-list">
                <li className="position-item">
                  X
                  <input
                    type="number"
                    name="lookat-x"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookat[0]}
                  />
                </li>
                <li className="position-item">
                  Y
                  <input
                    type="number"
                    name="lookat-y"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookat[1]}
                  />
                </li>
                <li className="position-item">
                  Z
                  <input
                    type="number"
                    name="lookat-z"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookat[2]}
                  />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>lookFrom</h3>
              <ul className="position-list">
                <li className="position-item">
                  X
                  <input
                    type="number"
                    name="lookfrom-x"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookfrom[0]}
                  />
                </li>
                <li className="position-item">
                  Y
                  <input
                    type="number"
                    name="lookfrom-y"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookfrom[1]}
                  />
                </li>
                <li className="position-item">
                  Z
                  <input
                    type="number"
                    name="lookfrom-z"
                    step="0.1"
                    onChange={(e) => {
                      this.save(e.target);
                    }}
                    defaultValue={lookfrom[2]}
                  />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>fov</h3>
              <input
                type="number"
                name="fov"
                step="1"
                onChange={(e) => {
                  this.save(e.target);
                }}
                defaultValue={vfov}
              />
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
