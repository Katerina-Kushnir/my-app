import React from 'react';
import { Routes, Route } from "react-router-dom";
import { RegistrationScrin1 } from './RegistrationScrin1';
import { RegistrationScrin2 } from './RegistrationScrin2';
import { RegistrationScrin3 } from './RegistrationScrin3';

export const RegistrationRouter = () => {

  return (
    <div>
      <Routes>
        
        <Route path='/register' element={<RegistrationScrin1/>} />
        <Route path='/register/email' element={<RegistrationScrin2/>} />
        <Route path='/register/userdata' element={<RegistrationScrin3/>} />
        <Route path='*' element={<RegistrationScrin1/>} />
      </Routes>

    </div>
  )
}
