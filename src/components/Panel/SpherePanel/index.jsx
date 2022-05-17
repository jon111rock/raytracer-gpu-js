import React, { Component } from "react";
import "./index.css";

export default class SpherePanel extends Component {
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
                  X <input type="text" />
                </li>
                <li className="position-item">
                  Y <input type="text" />
                </li>
                <li className="position-item">
                  Z <input type="text" />
                </li>
              </ul>
            </li>
            <li className="attribute-item">
              <h3>radius</h3>
              <input type="text" />
            </li>
            <li className="attribute-item">
              <h3>shine</h3>
              <input type="text" />
            </li>
            <li className="attribute-item">
              <h3>reflectivity</h3>
              <input type="text" />
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
