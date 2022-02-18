import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAddItemModalVisible } from './Store/App/selectors';
import { ItemsListButtons } from './Components/ItemsListButtons/ItemsListButtons';
import { ItemsList } from './Components/ItemsList/ItemsList';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';

export const App = () => {
 const isAddItemModalVisible = useSelector(selectIsAddItemModalVisible);
  return (
    <div>
      <ItemsListButtons/>
      <ItemsList/>
      {isAddItemModalVisible ? <AddItemModal/> : null }
    </div>
  )
}

