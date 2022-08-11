import React, { Component } from "react";
import "./App.css";
import Perro from "./components/Perro";

class App extends Component {
  render() {
    
    const list = [
      {
        nombre: "pupi1",
        edad: 3,
        sexo: "m",
        raza: "snap",
        tamanio: "pequenio",
      },
      {
        nombre: "pupi2",
        edad: 2,
        sexo: "f",
        raza: "snap2",
        tamanio: "mediano",
      },
    ];

    const List = list.map((item, index) => (
        <Perro key={index} item={item} />
    ));

    return <div className="App">{List}</div>;
  }
}

export default App;
