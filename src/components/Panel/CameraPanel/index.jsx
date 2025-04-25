import React, { Component } from "react";
import PubSub from "pubsub-js";

import { UPDATE_CAMERA } from "../../../event-types";
import * as Camera from "../../Renderer/Objects/Camera";
import "./index.css"; // Import CSS

export default class CameraPanel extends Component {
  constructor(props) {
    super(props); // Pass props

    // Initialize state directly, flatten the structure
    this.state = {
        lookat: [...Camera.defaultSetting.lookat], // Create copies to avoid mutation
        lookfrom: [...Camera.defaultSetting.lookfrom],
        vup: [...Camera.defaultSetting.vup], // Keep vup even if not currently editable
        vfov: Camera.defaultSetting.vfov,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const numValue = Number(value);

    this.setState(
      (prevState) => {
        const newState = { ...prevState };
        const [group, indexOrProp] = name.split("-"); // e.g., "lookat-0", "vfov"

        switch (group) {
          case "lookat":
            newState.lookat[parseInt(indexOrProp, 10)] = numValue;
            break;
          case "lookfrom":
            newState.lookfrom[parseInt(indexOrProp, 10)] = numValue;
            break;
          case "vfov": // Use vfov to match state property
            newState.vfov = numValue;
            break;
          // case "vup": // Add handling if vup becomes editable
          //   newState.vup[parseInt(indexOrProp, 10)] = numValue;
          //   break;
          default:
            console.error("Unhandled camera input name:", name);
            return prevState;
        }
        return newState;
      },
      () => {
        // Publish the entire state object after update
        PubSub.publish(UPDATE_CAMERA, this.state);
      }
    );
  };

  render() {
    const { lookat, lookfrom, vfov } = this.state;

    // Define ranges and steps for camera sliders
    const ranges = {
        look: { min: -10, max: 10, step: 0.1 }, // Shared range for lookat/lookfrom
        vfov: { min: 10, max: 120, step: 1 },
    };

    return (
      <details className="control-item camera-panel"> {/* Add camera-panel class */}
        <summary>Camera</summary>
        <div className="attribute-list">
          {/* LookAt Controls */}
          <div className="attribute-group">
            <h4>Look At</h4>
            {["x", "y", "z"].map((axis, index) => (
              <div className="attribute-item" key={`lookat-${axis}`}>
                <label>{axis.toUpperCase()}</label>
                <input
                  type="range"
                  name={`lookat-${index}`}
                  min={ranges.look.min}
                  max={ranges.look.max}
                  step={ranges.look.step}
                  value={lookat[index]}
                  onChange={this.handleChange}
                  title={lookat[index]}
                />
                <input
                  type="number"
                  name={`lookat-${index}`}
                  step={ranges.look.step}
                  value={lookat[index]}
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </div>

          {/* LookFrom Controls */}
          <div className="attribute-group">
            <h4>Look From</h4>
            {["x", "y", "z"].map((axis, index) => (
              <div className="attribute-item" key={`lookfrom-${axis}`}>
                <label>{axis.toUpperCase()}</label>
                <input
                  type="range"
                  name={`lookfrom-${index}`}
                  min={ranges.look.min}
                  max={ranges.look.max}
                  step={ranges.look.step}
                  value={lookfrom[index]}
                  onChange={this.handleChange}
                  title={lookfrom[index]}
                />
                <input
                  type="number"
                  name={`lookfrom-${index}`}
                  step={ranges.look.step}
                  value={lookfrom[index]}
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </div>

          {/* FOV Control */}
          <div className="attribute-group">
             <h4>Field of View (vFOV)</h4>
             <div className="attribute-item">
                <label>FOV</label>
                <input
                  type="range"
                  name="vfov" // Use vfov to match state
                  min={ranges.vfov.min}
                  max={ranges.vfov.max}
                  step={ranges.vfov.step}
                  value={vfov}
                  onChange={this.handleChange}
                  title={vfov}
                />
                 <input
                  type="number"
                  name="vfov" // Use vfov to match state
                  step={ranges.vfov.step}
                  min={ranges.vfov.min}
                  max={ranges.vfov.max}
                  value={vfov}
                  onChange={this.handleChange}
                />
             </div>
          </div>

          {/* Note: vup is not currently editable via UI */}
        </div>
      </details>
    );
  }
}
