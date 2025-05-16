import React, { Component } from 'react';

export default class ComponenteClasse extends Component {
    render() {
        return (
            <div>
                <h1> Classe!</h1>
                {this.props.value || ""}
            </div>
        );
    }
}