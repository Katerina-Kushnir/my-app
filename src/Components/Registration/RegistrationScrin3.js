import React from 'react';
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { updateUserModalAction } from "../../Store/App/actions";
import { setIsRegistered } from '../../Store/App/actions';
import { selectUserModal } from '../../Store/App/selectors';

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
        <div>
            <p>name:</p>
            <input value={name} onChange={onNameChange} />
            <p>lastname:</p>
            <input value={lastname} onChange={onLastnameChange}/>
            <p>Age:</p>
            <input value={age} onChange={onAgeChange}/>
            <br/>
            <br/>
            <button onClick={onContinuePressed}>Continue</button>
        </div>
    )
}


