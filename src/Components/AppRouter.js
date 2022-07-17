import React from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ItemsList } from './ItemsList/ItemsList';
import { AddItemModal } from './AddItemModal/AddItemModal';
// import { About } from './About/About';
import { CategoriesList } from './Category/CategoriesList';
import { PageNotFound } from './PageNotFound/PageNotFound';

import { setIsRegistered } from '../Store/App/actions';

import { SortButton } from './SortButton/SortButton';

const styles = {
  nav: {
    borderBottom: "1px solid black",
    paddingBottom: "1rem",
  },
  linkItem: {
    padding: "0 20px 0 20px",
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
        <Link style={styles.linkItem} to="/">Add Item</Link>
        {/* <Link style={styles.linkItem} to="/about">About</Link> */}
        <Link style={styles.linkItem} to="/categories">Categories</Link>
        <Link style={styles.linkItem} to="/sort">Sort</Link>
        <button onClick={onLogOutClicked}>Log out</button>
      </nav>
      <Routes>
        <Route path='/*' element={<AddItemModal />} />
        <Route path='/categories' element={<CategoriesList />} />
        <Route path='/items/:categoryId' element={<ItemsList />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/sort' element={<SortButton />} />
        <Route path=':sortType' element={<SortButton />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
     <ItemsList />
    </div>
  )
}
