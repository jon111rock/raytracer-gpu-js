import React, { Component } from "react";
import PubSub from "pubsub-js";

import { UPDATE_OBJECT } from "../../../event-types";
import spheres from "../../Renderer/Objects/Spheres";
import "./index.css";

export default class SpherePanel extends Component {
  constructor(props) {
    super();

    let i;

    if (props.name === "leftSphere") {
      i = 0;
    }
    if (props.name === "centerSphere") {
      i = 1;
    }
    if (props.name === "rightSphere") {
      i = 2;
    }

    this.state = {
      sphereDate: [
        spheres[i][0],
        spheres[i][1],
        spheres[i][2],
        spheres[i][3],
        spheres[i][4],
        spheres[i][5],
        spheres[i][6],
        spheres[i][7],
        spheres[i][8],
      ],
    };
  }

  save = (e) => {
    let ary = [];
    switch (e.name) {
      case "position-x":
        ary = [...this.state.sphereDate];
        ary[0] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "position-y":
        ary = [...this.state.sphereDate];
        ary[1] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "position-z":
        ary = [...this.state.sphereDate];
        ary[2] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "color-r":
        ary = [...this.state.sphereDate];
        ary[3] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "color-g":
        ary = [...this.state.sphereDate];
        ary[4] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "color-b":
        ary = [...this.state.sphereDate];
        ary[5] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "radius":
        ary = [...this.state.sphereDate];
        ary[6] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "shine":
        ary = [...this.state.sphereDate];
        ary[7] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
      case "reflectivity":
        ary = [...this.state.sphereDate];
        ary[8] = Number(e.value);
        this.setState({ sphereDate: ary });
        break;
    }

    PubSub.publish(UPDATE_OBJECT, {
      name: this.props.name,
      sphere: this.state.sphereDate,
    });
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        <li className="control-item">
          <h2>{name}</h2>
          <ul className="attribute-list">
            <li className="attribute-item">
              <h3>position</h3>
              <ul className="position-list">
                <li className="position-item">
                  X
                  <input
                    type="number"
                    step="0.1"
                    name="position-x"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[0]}
                  />
                </li>
                <li className="position-item">
                  Y
                  <input
                    type="number"
                    step="0.1"
                    name="position-y"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[1]}
                  />
                </li>
                <li className="position-item">
                  Z
                  <input
                    type="number"
                    step="0.1"
                    name="position-z"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[2]}
                  />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>Color</h3>
              <ul className="position-list">
                <li className="position-item">
                  R
                  <input
                    type="number"
                    step="0.1"
                    name="color-r"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[3]}
                  />
                </li>
                <li className="position-item">
                  G
                  <input
                    type="number"
                    step="0.1"
                    name="color-g"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[4]}
                  />
                </li>
                <li className="position-item">
                  B
                  <input
                    type="number"
                    step="0.1"
                    name="color-b"
                    onChange={(e) => this.save(e.target)}
                    defaultValue={this.state.sphereDate[5]}
                  />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>radius</h3>
              <input
                type="number"
                step="0.1"
                name="radius"
                onChange={(e) => this.save(e.target)}
                defaultValue={this.state.sphereDate[6]}
              />
            </li>
            <li className="attribute-item">
              <h3>shine</h3>
              <input
                type="number"
                name="shine"
                onChange={(e) => this.save(e.target)}
                defaultValue={this.state.sphereDate[7]}
              />
            </li>
            <li className="attribute-item">
              <h3>reflectivity</h3>
              <input
                type="number"
                step="0.01"
                name="reflectivity"
                onChange={(e) => this.save(e.target)}
                defaultValue={this.state.sphereDate[8]}
              />
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
