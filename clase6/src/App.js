import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/classComponent';
import FunctionComponent from './components/functionComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Invitados:</h2>
        <ClassComponent nombre="Nicolas" estaEnLista={true}></ClassComponent>
        <ClassComponent nombre="Ivan" estaEnLista={false} />
        <ClassComponent nombre="Carolina" estaEnLista={true} />
        <h2>Tareas:</h2>
        <FunctionComponent nombre="Nicolas" tarea="papas fritas"></FunctionComponent>
        <FunctionComponent nombre="Ivan" tarea="pizzas" />
        <FunctionComponent nombre="Carolina" tarea="bebidas" />
      </div>
    );
  }
}

export default App;
