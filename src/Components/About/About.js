import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserModal } from '../../Store/App/selectors';
import './About.css'

export const About = () => {
  const userModal = useSelector(selectUserModal);
  return (
    <div className='about'>
      <p>Імя:</p>
      <p>{userModal.name}</p>
      <p>Прізвище:</p>
      <p>{userModal.lastname}</p>
      <p>Вік:</p>
      <p>{userModal.age}</p>
    </div>
  );
}