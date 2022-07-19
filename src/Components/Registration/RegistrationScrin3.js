import React from 'react';
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { updateUserModalAction } from "../../Store/App/actions";
import { setIsRegistered } from '../../Store/App/actions';
import { selectUserModal } from '../../Store/App/selectors';
import './RegistrationScrin.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegistrationScrin3 = () => {

    const userModal = useSelector(selectUserModal);
    const [name, setName] = useState(userModal.name)
    const [lastname, setLastname] = useState(userModal.lastname)
    const [age, setAge] = useState(userModal.age)

    const dispatch = useDispatch();

    const onNameChange = useCallback((event) => {
        setName(event.target.value)
    }, [])
    const onLastnameChange = useCallback((event) => {
        setLastname(event.target.value)
    }, [])
    const onAgeChange = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        console.log('isStringHasOnlyNumbers: ',isStringHasOnlyNumbers)
        if (isStringHasOnlyNumbers || !value.length) {
            setAge(value)
        }
  }, [])

    const onContinuePressed = useCallback(() => {
        dispatch(updateUserModalAction({
            name,
            lastname,
            age
        }))
        localStorage.setItem('isRegistered', true)
        localStorage.setItem('user', true)
        dispatch(setIsRegistered(true))
    }, [dispatch, name, lastname, age])
    return (
        <div  className='registration-form1'>
            <TextField id="outlined-basic" label="Ім'я" variant="outlined" value={name} onChange={onNameChange} />
            <br />
            <TextField id="outlined-basic" label="Прізвище" variant="outlined" value={lastname} onChange={onLastnameChange} />
            <br />
            <TextField id="outlined-basic" label="Вік" variant="outlined" value={age} onChange={onAgeChange} type="number"/>
            {/* <p>name:</p>
            <input value={name} onChange={onNameChange} /> */}
            {/* <p>lastname:</p>
            <input value={lastname} onChange={onLastnameChange}/>
            <p>Age:</p>
            <input value={age} onChange={onAgeChange}/> */}
            <br/>
            <Button variant="contained" onClick={onContinuePressed}>Продовжити</Button>
            {/* <button onClick={onContinuePressed}>Continue</button> */}
        </div>
    )
}


