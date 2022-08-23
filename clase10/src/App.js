import React, { Component } from "react";
import "./App.css";
import Pedido from "./components/pedido";


class App extends Component {
  constructor() {
    super();

    this.state = {
      pedido: "",
      mostrar: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  componentDidUpdate() {
    console.log('DidUpdate: Justo después de actualizarse');
}

  tick() {
    this.setState({ pedido: "pizza" });
  }

  mostrarOrden = () => {
    this.setState({mostrar: false});
  }


  render() {
    let myOrder;
    if (this.state.mostrar) {
      myOrder = <Pedido pedido = {this.state.pedido}></Pedido>;
    };


    return (
      <div className="App">
        { myOrder}
        <button onClick={ this.mostrarOrden }>Cancelar pedido</button>
      </div>
    );
  }
}

export default App;
