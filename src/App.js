import React, { useCallback, useEffect, useState } from 'react';
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

export const App = () => {

  const [fruitsItem, setFruits] = useState(fruits);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [fruitsVM, setFruitsVM] = useState(null);
  const [editingFruit, setEditingFruit] = useState(fruits);
  const [filteredValue, setFilteredValue] = useState('');
  const [SelectedValue, setSelectedValue] = useState('');
 
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
      fruitsItem.map((stateFruit) => {
        if (stateFruit.id === fruit.id) {
          return fruit;
        }
        return stateFruit;
      })
    )
  }, [setIsAddModalVisible, setEditingFruit, setFruits, fruitsItem])

  const onEditFruit = useCallback((id) => {
    const fruit = fruitsItem.find((fruit) => fruit.id === id)
      setIsAddModalVisible (true);
      setEditingFruit(fruit);
  }, [fruitsItem, setIsAddModalVisible, setEditingFruit])

  const onDeleteFruit = useCallback((id) => {
    setFruits ( fruitsItem.filter((fruit) => fruit.id !== id) )
  }, [fruitsItem])

  const onModalClose = useCallback(() => {
    setIsAddModalVisible(false);
    setEditingFruit(null);
  }, [setIsAddModalVisible, setEditingFruit])

  const onSort = useCallback((value) => {
    setFruitsVM( [...fruitsItem].sort((a, b) => a[value] > b[value] ? 1 : -1) );
  }, [setFruitsVM, fruitsItem])

  const onDropSort = useCallback(() => {
    setFruitsVM(null);
  }, [setFruitsVM])

  const onFilterList = useCallback((value) => {
    setFilteredValue(value);

  }, [])

  useEffect(() => {
    if (filteredValue.length) {
      setFruitsVM( [...fruitsItem].filter((item) => item.name.toLowerCase().includes(filteredValue.toLocaleString())));    
    } else {
      setFruitsVM(null);
    }
  }, [filteredValue, fruitsItem])

  const onSelectList = useCallback((value) => {
    setSelectedValue(value);
    setFruitsVM( [...fruitsItem].filter((item) => item.category.toLowerCase().includes(value.toLocaleString())));

    if (value === 'All') {
      setFruitsVM(null);
    }
  }, [setSelectedValue, setFruitsVM, fruitsItem])


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
          onAddItemClick = { onAddItem }
          onCloseAddFruitModalClick = { onModalClose }
          onEditItemClick = { onApplyEditFruit }
          fruit = { editingFruit }
        /> 
      : null}
    </div>
  )
}
