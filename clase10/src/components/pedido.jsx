import React, { Component } from 'react'

export default class Pedido extends Component {
constructor(props){
    super(props);
}


  render() {
    return (
      <div>
      <h2>Tu pedido es: {this.props.pedido}</h2>
      </div>

    )
  }
}
