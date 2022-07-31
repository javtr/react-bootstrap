import React, { Component } from "react";
import Content from "./components/Content";
import NavbarComp from "./components/NavbarComp";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarComp/>
      <Content />
      </div>
    );
  }
}

export default App;
