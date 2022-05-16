import React, { Component } from "react";
import "./index.css";

export default class SpherePanel extends Component {
  render() {
    return (
      <div>
        <li class="control-item">
          <h2>Left Sphere</h2>
          <ul class="attribute-list">
            <li class="attribute-item">
              <h3>position</h3>
              <ul class="position-list">
                <li class="position-item">
                  X <input type="text" />
                </li>
                <li class="position-item">
                  Y <input type="text" />
                </li>
                <li class="position-item">
                  Z <input type="text" />
                </li>
              </ul>
            </li>
            <li class="attribute-item">
              <h3>radius</h3>
              <input type="text" />
            </li>
            <li class="attribute-item">
              <h3>shine</h3>
              <input type="text" />
            </li>
            <li class="attribute-item">
              <h3>reflectivity</h3>
              <input type="text" />
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
