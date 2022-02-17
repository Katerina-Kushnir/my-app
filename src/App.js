import React, { useCallback, useState } from 'react';
import { AddFruitModal } from './AddFruitModal/AddFruitModal';
import { FruitsList } from './FruitsList/FruitsList';
import { FruitsListButtons } from './FruitsListButtons/FruitsListButtons';
import { v4 as uuidv4 } from 'uuid';

const fruits = [
  {
    id: uuidv4 (),
    name: 'APPLE',
    category: 'fruit',
    price: 20,
  },
  {
    id: uuidv4 (),
    name: 'BANANA',
    category: 'fruit',
    price: 30,
  },
  {
    id: uuidv4 (),
    name: 'LIME',
    category: 'fruit',
    price: 90,
  },
  {
    id: uuidv4 (),
    name: 'STRAWBERRY',
    category: 'fruit',
    price: 110,
  },
  {
    id: uuidv4 (),
    name: 'TOMATO',
    category: 'vegetable',
    price: 170,
  },
  {
    id: uuidv4 (),
    name: 'ORANGE',
    category: 'fruit',
    price: 45,
  },
  {
    id: uuidv4 (),
    name: 'KIWI',
    category: 'fruit',
    price: 60,
  },
  {
    id: uuidv4 (),
    name: 'CUCUMBER',
    category: 'vegetable',
    price: 80,
  },
  {
    id: uuidv4 (),
    name: 'PEPPER',
    category: 'vegetable',
    price: 120,
  }
]

/*class App extends Component {
  constructor(props) {
    super(props);

    this.onFilterList = this.onFilterList.bind(this);

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
      fruits,
      fruitsVM: null,
    }

    this.onSort = (value) => {
      this.setState({
        fruitsVM: [...this.state.fruits].sort((a, b) => a[value] > b[value] ? 1 : -1)
      })
    }
  
    this.onDropSort = (value) => {
      this.setState({
        fruitsVM: null
      })
    }

  }

  onFilterList = (value) => {
    this.setState({
      isFiltered: true,
      fruitsVM: [...this.state.fruits].filter((item) => item.name.toLowerCase().includes(value.toLocaleString()))
    })
  }

  onSelectList = (value) => {
    this.setState({
      isFiltered: true,
      fruitsVM: [...this.state.fruits].filter((item) => item.category.toLowerCase().includes(value.toLocaleString()))
    })
    if (value == 'All') {
      this.setState({
        fruitsVM: null
      })
    }
  }

  render() { 
    return (
      <div>
        <FruitsList 
          fruits = {this.state.fruitsVM || this.state.fruits} 
          onDeleteFruit = {this.onDeleteFruit}
          onEditruit = {this.onEditFruit}
          onSort = {this.onSort}
          onDropSort = {this.onDropSort}
          onFilterList = {this.onFilterList}
          onSelectList = {this.onSelectList}
        />
        <FruitsListButtons onAddClicked = {() => {this.setState({isAddModalVisible: true})}} />
        {this.state.isAddModalVisible ? 
          <AddFruitModal 
            onAddItemClick = { this.onAddItem }
            onCloseAddFruitModalClick = { this.onModalClose }
            onEditItemClick = { this.onApplyEditFruit }
            fruit = { this.state.editingFruit }
          /> 
        : null}
      </div>
    )
  }
}

export default App;*/


export const App = () => {

  const [fruitsItem, setFruits] = useState(fruits);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [fruitsVM, setFruitsVM] = useState(null);
  const [editingFruit, setEditingFruit] = useState(null);
  const [isFiltered, setIsFiltered] = useState(true);

 
  const onAddItem = useCallback (({name, category, price})=> {
    setIsAddModalVisible (false);
    setFruits( [...fruitsItem,
      {
        id: uuidv4 (),
        name,
        category,
        price,
      }
    ])
  }, [setIsAddModalVisible, setFruits, fruitsItem])

  const onApplyEditFruit = useCallback((fruit) => {
    setIsAddModalVisible (false);
    setEditingFruit (null);
    setFruits (
      fruits.map((stateFruit) => {
        if (stateFruit.id === fruit.id) {
          return fruit;
        }
        return stateFruit;
      })
    )
  }, [setIsAddModalVisible, setEditingFruit, setFruits])

  const onDeleteFruit = (id) => {
    setFruits ( fruitsItem.filter((fruit) => fruit.id !== id) )
  }

  const onEditFruit = (id) => {
    const fruit = fruitsItem.find((fruit) => fruit.id === id)
      setIsAddModalVisible (true);
      setEditingFruit(fruit);
  }

  const onModalClose = useCallback(() => {
    setIsAddModalVisible(false);
    setEditingFruit(null);
  }, [setIsAddModalVisible, setEditingFruit])

  const onSort = useCallback((value) => {
    setFruitsVM( [...fruits].sort((a, b) => a[value] > b[value] ? 1 : -1) );
  }, [setFruitsVM])

  const onDropSort = useCallback(() => {
    setFruitsVM(null);
  }, [setFruitsVM])

  const onFilterList = useCallback((value) => {
    setIsFiltered(true);
    setFruitsVM( [...fruits].filter((item) => item.name.toLowerCase().includes(value.toLocaleString())));
  }, [setIsFiltered, setFruitsVM, ])

  const onSelectList = (value) => {
    setIsFiltered(true);
    setFruitsVM( [...fruits].filter((item) => item.category.toLowerCase().includes(value.toLocaleString())));

    if (value == 'All') {
      setFruitsVM(null);
    }
  }


  return (
    <div>
      <FruitsList 
        fruits = {fruitsVM || fruitsItem} 
        onDeleteFruit = {onDeleteFruit}
        onEditruit = {onEditFruit}
        onSort = {onSort}
        onDropSort = {onDropSort}
        onFilterList = {onFilterList}
        onSelectList = {onSelectList}
      />
      <FruitsListButtons onAddClicked = {() => setIsAddModalVisible(true)} />
      {isAddModalVisible ? 
        <AddFruitModal 
          onAddItem  = { onAddItem }
          onAddItemClick = { onAddItem }
          onCloseAddFruitModalClick = { onModalClose }
          onEditItemClick = { onApplyEditFruit }
          fruit = { editingFruit }
        /> 
      : null}
    </div>
  )
}
