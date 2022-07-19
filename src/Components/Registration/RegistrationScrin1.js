import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './RegistrationScrin.css'

export const RegistrationScrin1 = () => {
    const navigate = useNavigate();

    const onRegisterWithEmail = useCallback(() => {
        navigate('/register/email')
    })
    return (
        <div  className='button-log'>
            <Button variant="outlined" onClick={onRegisterWithEmail}>Зареєструватися через Email</Button>
        </div>
    )
}