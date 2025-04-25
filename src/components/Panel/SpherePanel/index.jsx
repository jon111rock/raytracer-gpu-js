import React, { Component } from "react";
import PubSub from "pubsub-js";

import { UPDATE_OBJECT } from "../../../event-types";
import spheres from "../../Renderer/Objects/Spheres";
import "./index.css";

export default class SpherePanel extends Component {
  constructor(props) {
    super(props);

    let i;

    if (props.name === "leftSphere") {
      i = 0;
    } else if (props.name === "centerSphere") {
      i = 1;
    } else if (props.name === "rightSphere") {
      i = 2;
    } else {
      console.error("Invalid sphere name prop:", props.name);
      i = 0;
    }

    this.state = {
      position: [spheres[i][0], spheres[i][1], spheres[i][2]],
      color: [spheres[i][3], spheres[i][4], spheres[i][5]],
      radius: spheres[i][6],
      shine: spheres[i][7],
      reflect: spheres[i][8],
    };
  }

  handleChange = (event) => {
    const { name, value, type } = event.target;
    const numValue = Number(value);

    this.setState(
      (prevState) => {
        const newState = { ...prevState };
        const [group, indexOrProp] = name.split("-");

        switch (group) {
          case "position":
            newState.position[parseInt(indexOrProp, 10)] = numValue;
            break;
          case "color":
            newState.color[parseInt(indexOrProp, 10)] = numValue;
            break;
          case "radius":
            newState.radius = numValue;
            break;
          case "shine":
            newState.shine = numValue;
            break;
          case "reflectivity":
            newState.reflect = numValue;
            break;
          default:
            console.error("Unhandled input name:", name);
            return prevState;
        }
        return newState;
      },
      () => {
        PubSub.publish(UPDATE_OBJECT, {
          name: this.props.name,
          sphere: {
            position: this.state.position,
            color: this.state.color,
            radius: this.state.radius,
            shine: this.state.shine,
            reflect: this.state.reflect,
          }
        });
      }
    );
  };

  render() {
    const { name } = this.props;
    const { position, color, radius, shine, reflect } = this.state;

    const ranges = {
      position: { min: -3, max: 3, step: 0.1 },
      color: { min: 0, max: 1, step: 0.01 },
      radius: { min: 0.1, max: 2, step: 0.05 },
      shine: { min: 1, max: 1000, step: 1 },
      reflect: { min: 0, max: 1, step: 0.01 },
    };

    return (
      <details className="control-item sphere-panel">
        <summary>{name}</summary>
        <div className="attribute-list">
          <div className="attribute-group">
            <h4>Position</h4>
            {["x", "y", "z"].map((axis, index) => (
              <div className="attribute-item" key={axis}>
                <label>{axis.toUpperCase()}</label>
                <input
                  type="range"
                  name={`position-${index}`}
                  min={ranges.position.min}
                  max={ranges.position.max}
                  step={ranges.position.step}
                  value={position[index]}
                  onChange={this.handleChange}
                  title={position[index]}
                />
                <input
                  type="number"
                  name={`position-${index}`}
                  step={ranges.position.step}
                  value={position[index]}
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </div>

          <div className="attribute-group">
            <h4>Color</h4>
            {["r", "g", "b"].map((channel, index) => (
              <div className="attribute-item" key={channel}>
                <label>{channel.toUpperCase()}</label>
                <input
                  type="range"
                  name={`color-${index}`}
                  min={ranges.color.min}
                  max={ranges.color.max}
                  step={ranges.color.step}
                  value={color[index]}
                  onChange={this.handleChange}
                  title={color[index]}
                />
                <input
                  type="number"
                  name={`color-${index}`}
                  min={ranges.color.min}
                  max={ranges.color.max}
                  step={ranges.color.step}
                  value={color[index]}
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </div>

          <div className="attribute-group">
            <h4>Radius</h4>
            <div className="attribute-item">
              <label>R</label>
              <input
                type="range"
                name="radius"
                min={ranges.radius.min}
                max={ranges.radius.max}
                step={ranges.radius.step}
                value={radius}
                onChange={this.handleChange}
                title={radius}
              />
              <input
                type="number"
                name="radius"
                step={ranges.radius.step}
                value={radius}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="attribute-group">
            <h4>Shine</h4>
            <div className="attribute-item">
              <label>S</label>
              <input
                type="range"
                name="shine"
                min={ranges.shine.min}
                max={ranges.shine.max}
                step={ranges.shine.step}
                value={shine}
                onChange={this.handleChange}
                title={shine}
              />
              <input
                type="number"
                name="shine"
                step={ranges.shine.step}
                value={shine}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="attribute-group">
            <h4>Reflectivity</h4>
            <div className="attribute-item">
              <label>Ref</label>
              <input
                type="range"
                name="reflectivity"
                min={ranges.reflect.min}
                max={ranges.reflect.max}
                step={ranges.reflect.step}
                value={reflect}
                onChange={this.handleChange}
                title={reflect}
              />
              <input
                type="number"
                name="reflectivity"
                step={ranges.reflect.step}
                min={ranges.reflect.min}
                max={ranges.reflect.max}
                value={reflect}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </details>
    );
  }
}
