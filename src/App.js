import React, { Component } from 'react';
import { AddFruitModal } from './AddFruitModal/AddFruitModal';
import { FruitsList } from './FruitsList/FruitsList';
import { FruitsListButtons } from './FruitsListButtons/FruitsListButtons';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = ({name, color, price})=> {
      this.setState({
        isAddModalVisible: false,
        fruits: [
          ...this.state.fruits,
          {
            id: uuidv4 (),
            name,
            color,
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
        fruits: this.state.fruits.filter((fruit) => fruit.id != id)
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
          color: 'green',
          price: '20uah',
        },
        {
          id: uuidv4 (),
          name: 'BANANA',
          color: 'yellow',
          price: '30uah',
        },
        {
          id: uuidv4 (),
          name: 'LIME',
          color: 'green',
          price: '90uah',
        },
        {
          id: uuidv4 (),
          name: 'STRAWBERRY',
          color: 'red',
          price: '120uah',
        },
        {
          id: uuidv4 (),
          name: 'ORANGE',
          color: 'orange',
          price: '45uah',
        },
        {
          id: uuidv4 (),
          name: 'KIWI',
          color: 'green',
          price: '60uah',
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
