import React, { Component } from 'react';

export class Fruit extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.fruit?.name || " - "}</td>
                <td>{this.props.fruit?.color || " - "}</td>
                <td>{this.props.fruit?.price || " - "}</td>
                <td>
                    <button onClick={this.props.onDelete}>X</button>
                </td>
                <td>
                    <button onClick={this.props.onEdit}>Edit</button>
                </td>
            </tr>
        )
    }
}

