import React from "react";

export default function Perro(props) {
  return (
    <ul>
        <h2>Nombre: {props.item.nombre}</h2>
        <li>edad: {props.item.edad}</li>
        <li>sexo: {props.item.sexo}</li>
        <li>raza: {props.item.raza}</li>
        <li>tamaño: {props.item.tamanio}</li>
    </ul>
  );
}