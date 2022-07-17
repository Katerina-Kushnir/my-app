import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserModal } from '../../Store/App/selectors';

export const About = () => {
  const userModal = useSelector(selectUserModal);
  return (
    <div>
      <p>Name:</p>
      <p>{userModal.name}</p>
      <p>Lastname:</p>
      <p>{userModal.lastname}</p>
      <p>Age:</p>
      <p>{userModal.age}</p>
    </div>
  );
}