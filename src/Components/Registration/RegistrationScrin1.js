import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const RegistrationScrin1 = () => {
    const navigate = useNavigate();

    const onRegisterWithEmail = useCallback(() => {
        navigate('/register/email')
    })
    return (
        <div>
            <button onClick={onRegisterWithEmail}>Register with Email</button>
        </div>
    )
}