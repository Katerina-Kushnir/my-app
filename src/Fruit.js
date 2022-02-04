import React, { Component } from 'react';

class Fruit extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.fruit?.name || " N/A "}</td>
        <td>{this.props.fruit?.color || "  N/A  "}</td>
        <td>{this.props.fruit?.price || "  N/A  "}</td>
      </tr>
    )
  }
}

export default Fruit;