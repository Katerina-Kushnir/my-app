import React from 'react';
import './Fruit.css';

/*export class Fruit extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.fruit?.name || " - "}</td>
                <td>{this.props.fruit?.category || " - "}</td>
                <td>{this.props.fruit?.price || " - "}</td>
                <td className='table_button'>
                    <button onClick={this.props.onDelete} className='delete'>X</button>
                </td>
                <td className='table_button'>
                    <button onClick={this.props.onEdit}>Edit</button>
                </td>
            </tr>
        )
    }
}*/

export const Fruit = (props) => {
    return (
        <tr>
            <td>{props.fruit?.name || " - "}</td>
            <td>{props.fruit?.category || " - "}</td>
            <td>{props.fruit?.price || " - "}</td>
            <td className='table_button'>
                <button onClick={props.onDelete} className='delete'>X</button>
            </td>
            <td className='table_button'>
                <button onClick={props.onEdit}>Edit</button>
            </td>
        </tr>
    )
}

