import React, { Component } from "react";
import spheres from "../../Renderer/Objects/Spheres";
import "./index.css";

export default class SpherePanel extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
    };

    let i = 0;
    if (this.state.name === "leftSphere") {
      this.defaultSphere = {
        x: spheres[i][0],
        y: spheres[i][1],
        z: spheres[i][2],
        r: spheres[i][3],
        g: spheres[i][4],
        b: spheres[i][5],
        radius: spheres[i][6],
        shine: spheres[i][7],
        reflect: spheres[i][8],
      };
    }
  }

  save = (e) => {};

  render() {
    return (
      <div>
        <li className="control-item">
          <h2>Left Sphere</h2>
          <ul className="attribute-list">
            <li className="attribute-item">
              <h3>position</h3>
              <ul className="position-list">
                <li className="position-item">
                  X
                  <input
                    type="text"
                    name="position-x"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.x}
                  />
                </li>
                <li className="position-item">
                  Y
                  <input
                    type="text"
                    name="position-y"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.y}
                  />
                </li>
                <li className="position-item">
                  Z{" "}
                  <input
                    type="text"
                    name="position-z"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.z}
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
                    type="text"
                    name="color-r"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.r}
                  />
                </li>
                <li className="position-item">
                  G
                  <input
                    type="text"
                    name="color-g"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.g}
                  />
                </li>
                <li className="position-item">
                  B
                  <input
                    type="text"
                    name="color-b"
                    onChange={(e) => this.save(e)}
                    value={this.defaultSphere.b}
                  />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>radius</h3>
              <input
                type="text"
                name="radius"
                onChange={(e) => this.save(e)}
                value={this.defaultSphere.radius}
              />
            </li>
            <li className="attribute-item">
              <h3>shine</h3>
              <input
                type="text"
                name="shine"
                onChange={(e) => this.save(e)}
                value={this.defaultSphere.shine}
              />
            </li>
            <li className="attribute-item">
              <h3>reflectivity</h3>
              <input
                type="text"
                name="reflectivity"
                onChange={(e) => this.save(e)}
                value={this.defaultSphere.reflect}
              />
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
