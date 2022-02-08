import React, { Component } from 'react';
import { AddFruitModal } from './AddFruitModal/AddFruitModal';
import { FruitsList } from './FruitsList/FruitsList';
import { FruitsListButtons } from './FruitsListButtons/FruitsListButtons';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = ({name, category, price})=> {
      this.setState({
        isAddModalVisible: false,
        fruits: [
          ...this.state.fruits,
          {
            id: uuidv4 (),
            name,
            category,
            price,
          }
        ]
      })
    }

    this.onApplyEditFruit = (fruit) => {
      this.setState({
        isAddModalVisible:false,
        editingFruit: null,
        fruits: this.state.fruits.map((stateFruit) => {
          if (stateFruit.id === fruit.id) {
            return fruit;
          }
          return stateFruit;
        })
      })
    }

    this.onDeleteFruit = (id) => {
      this.setState ({
        fruits: this.state.fruits.filter((fruit) => fruit.id !== id)
      })
    }

    this.onEditFruit = (id) => {
      const fruit = this.state.fruits.find((fruit) => fruit.id === id)
      this.setState({
        isAddModalVisible: true,
        editingFruit: fruit,
      })
    }

    this.onModalClose = () => {
      this.setState ({
        isAddModalVisible: false,
        editingFruit: null,
      })
    }

    this.state = {
      isAddModalVisible: false,
      fruits: [
        {
          id: uuidv4 (),
          name: 'APPLE',
          category: 'fruit',
          price: '20',
        },
        {
          id: uuidv4 (),
          name: 'BANANA',
          category: 'fruit',
          price: '30',
        },
        {
          id: uuidv4 (),
          name: 'LIME',
          category: 'fruit',
          price: '90',
        },
        {
          id: uuidv4 (),
          name: 'STRAWBERRY',
          category: 'fruit',
          price: '120',
        },
        {
          id: uuidv4 (),
          name: 'TOMATO',
          category: 'vegetable',
          price: '70',
        },
        {
          id: uuidv4 (),
          name: 'ORANGE',
          category: 'fruit',
          price: '45',
        },
        {
          id: uuidv4 (),
          name: 'KIWI',
          category: 'fruit',
          price: '60',
        },
        {
          id: uuidv4 (),
          name: 'CUCUMBER',
          category: 'vegetable',
          price: '80',
        },
        {
          id: uuidv4 (),
          name: 'PEPPER',
          category: 'vegetable',
          price: '120',
        }
      ]
    }
  }

  render() { 
    return (
      <div>
        <FruitsList 
        fruits = {this.state.fruits} 
        onDeleteFruit = {this.onDeleteFruit}
        onEditruit = {this.onEditFruit}
        />
        <FruitsListButtons onAddClicked = {() => {this.setState({isAddModalVisible: true})}} />
        {this.state.isAddModalVisible ? 
          <AddFruitModal onAddItemClick = { this.onAddItem }
          onCloseAddFruitModalClick = { this.onModalClose}
          onEditItemClick = { this.onApplyEditFruit }
          fruit = { this.state.editingFruit}
        /> 
        : null}
        
      </div>
    )
  }
}

export default App;
