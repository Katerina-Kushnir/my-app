import React from 'react';
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateUserModalAction } from "../../Store/App/actions";
import { selectUserModal } from "../../Store/App/selectors";
import './RegistrationScrin.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegistrationScrin2 = () => {

    const userModal = useSelector(selectUserModal);
    const [email, setEmail] = useState(userModal.email || '')
    const [password, setPassword] = useState(userModal.password || '')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onEmailChange = useCallback((event) => {
        setEmail(event.target.value)
    }, [])
    const onPasswordChange = useCallback((event) => {
        setPassword(event.target.value)
    }, [])

    const onContinuePressed = useCallback(() => {
        dispatch(updateUserModalAction({
            email,
            password
        }))
        navigate('/register/userdata')
    }, [dispatch, navigate, email, password])
    return (
        <div className='registration-form1'>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={onEmailChange} type="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" />
            <br/>
            <TextField id="filled-password-input" label="Пароль" type="password" autoComplete="current-password" variant="outlined" onChange={onPasswordChange}/>
            <br/>
            <Button variant="contained" onClick={onContinuePressed}>Продовжити</Button>
        </div>
    )
}


