import React from 'react';
import { Fruit } from '../Fruit/Fruit';
import './FruitsList.css'

const sortParametr = {
    first: {
        value: 'name', 
        status: false
    },
    second: {
        value: 'category', 
        status: false
    },
    third: {
        value: 'price', 
        status: false
    }
}
/*export class FruitsList extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th onClick={()=>this.props.onSort(sortParametr.first.value)}>{sortParametr.first.value}</th>
                        <th onClick={()=>this.props.onSort(sortParametr.second.value)}>{sortParametr.second.value}</th>
                        <th onClick={()=>this.props.onSort(sortParametr.third.value)}>{sortParametr.third.value}</th>
                        <td className='table_button'>
                            <button onClick={this.props.onDropSort}>DropSort</button>
                         </td>
                    </tr>
                    <tr>
                        <td><input placeholder="Search" onChange = {(event) => {this.props.onFilterList(event.target.value)}} /></td>
                        <td><select onChange = {(event) => {this.props.onSelectList(event.target.value)}}>
                                <option selected>All</option>
                                <option>fruit</option>
                                <option>vegetable</option>
                            </select>
                        </td>
                        <td><input disabled /></td>
                    </tr>
                    {this.props.fruits.map((fruit) => {
                        return (
                            <Fruit
                                key={fruit.id}
                                fruit={fruit}
                                onDelete={() => this.props.onDeleteFruit(fruit.id)}
                                onEdit={() => this.props.onEditruit(fruit.id)}
                                onDropSort={() => this.props.onDropSort()}
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}*/

export const FruitsList = (props) => {
    console.log(props.fruits)
    return (
        <table>
            <tbody>
                <tr>
                    <th onClick={()=>props.onSort(sortParametr.first.value)}>{sortParametr.first.value}</th>
                    <th onClick={()=>props.onSort(sortParametr.second.value)}>{sortParametr.second.value}</th>
                    <th onClick={()=>props.onSort(sortParametr.third.value)}>{sortParametr.third.value}</th>
                    <td className='table_button'>
                        <button onClick={props.onDropSort}>DropSort</button>
                     </td>
                </tr>
                <tr>
                    <td><input placeholder="Search" onChange = {(event) => {props.onFilterList(event.target.value)}} /></td>
                    <td><select onChange = {(event) => {props.onSelectList(event.target.value)}}>
                            <option selected>All</option>
                            <option>fruit</option>
                            <option>vegetable</option>
                        </select>
                    </td>
                    <td><input disabled /></td>
                </tr>
                {props.fruits.map((fruit) => {
                    return (
                        <Fruit
                            key={fruit.id}
                            fruit={fruit}
                            onDelete={() => props.onDeleteFruit(fruit.id)}
                            onEdit={() => props.onEditruit(fruit.id)}
                            onDropSort={() => props.onDropSort()}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}