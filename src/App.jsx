import React, { Component } from "react";
import Renderer from "./components/Renderer";
import Panel from "./components/Panel";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Panel />
          <Renderer />
        </div>
      </div>
    );
  }
}
