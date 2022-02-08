import React, { Component } from 'react';
import { Fruit } from '../Fruit/Fruit';

export class FruitsList extends Component {
    render () {
        return (
            <table>
                <tbody>
                {this.props.fruits.map((fruit) => {
                    return (
                        <Fruit
                        key={fruit.id}
                        fruit={fruit} 
                        onDelete={() => this.props.onDeleteFruit(fruit.id)}
                        onEdit={() => this.props.onEditruit(fruit.id)}
                        />
                    )
                })}
                </tbody>
            </table>
        )
    }
}

