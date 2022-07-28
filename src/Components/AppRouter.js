import React from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './ItemsList/ItemsList';
import { AddItemModal } from './AddItemModal/AddItemModal';
import { EditItem } from './EditItem/EditItem';
import { About } from './About/About';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { setIsRegistered } from '../Store/App/actions';
import Button from '@mui/material/Button';

const styles = {
  nav: {
    borderBottom: "1px solid black",
    backgroundColor: '#D8EEF3 ',
  },
  linkItem: {
    padding: "20px",
  }
}

export const AppRouter = () => {
  const dispatch = useDispatch();
  const onLogOutClicked = useCallback(() => {
    dispatch(setIsRegistered(false))
    localStorage.setItem('isRegistered', false);
    localStorage.setItem('user', '{}');
  }, [dispatch]);
  
  return (
    <div>
      <nav style={styles.nav}>
        <div>
          <Link style={styles.linkItem} to="/">Список товарів</Link>
          <Link style={styles.linkItem} to="/add">Додати товар</Link>
          <Link style={styles.linkItem} to="/about">Про Вас</Link>
        </div>
        <Button variant="outlined" color="error" onClick={onLogOutClicked}>
          Вийти
        </Button>
      </nav>
      <Routes>
        <Route path='/*' element={<ItemsList />} />
        <Route path='/add' element={<AddItemModal />} />
        <Route path='/edit/:itemId' element={<EditItem />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>     
    </div>
  )
}
