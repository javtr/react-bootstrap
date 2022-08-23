import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <li>{this.props.nombre} {this.props.estaEnLista ? "esta": "no está"} invitado a la fiesta</li>
            </React.Fragment>
        );
    }
}


export default ClassComponent;
