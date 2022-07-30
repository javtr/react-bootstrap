import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Content from "./components/Content";
import NavbarComp from "./components/NavbarComp";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarComp></NavbarComp>
      <Content />
      </div>
    );
  }
}

export default App;
