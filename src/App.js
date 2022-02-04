import React, { Component } from 'react';
import Fruit from './Fruit';
import Corner from './Corner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        {
          id: '0',
          name: 'APPLE',
          color: 'green',
          price: '20uah',
        },
        {
          id: '1',
          name: 'BANANA',
          color: 'yellow',
          price: '30uah',
        },
        {
          id: '2',
          name: 'LIME',
          color: 'green',
          price: '90uah',
        },
        {
          id: '3',
          name: 'STRAWBERRY',
          color: 'red',
          price: '120uah',
        },
        {
          id: '4',
          name: 'ORANGE',
          color: 'orange',
          price: '45uah',
        },
        {
          id: '5',
          name: 'KIWI',
          color: 'green',
          price: '60uah',
        }
      ]
    }
  }

  render() { 
    return (
      <Corner>
        <table>
          <tbody>
          {this.state.fruits.map((fruit, i) => {
            return (
              <Fruit
                key={fruit.id}
                fruit={fruit} 
              />
            )
          })}
          </tbody>
        </table>
        <button 
          onClick={() => { 
            this.setState({ 
              fruits: [...this.state.fruits, 
                {          
                  name: 'peach',
                  color: 'yellow',
                  price: '70uah', 
                }
              ] }) 
          }}>Add element</button>
        <button 
        onClick={() => { 
          this.setState({ 
            fruits: this.state.fruits.slice(0, this.state.fruits.length - 1) }) 
        }}>Delete element</button>
      </Corner>
    )
  }
}

export default App;
