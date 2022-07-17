import React from 'react';
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateUserModalAction } from "../../Store/App/actions";
import { selectUserModal } from "../../Store/App/selectors";

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
        <div>
            <p>Email:</p>
            <input value={email} onChange={onEmailChange} />
            <p>Password:</p>
            <input value={password} onChange={onPasswordChange}/>
            <br/>
            <br/>
            <button onClick={onContinuePressed}>Continue</button>
        </div>
    )
}


