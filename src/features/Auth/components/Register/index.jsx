import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log('value:', values);
    try {
      // auto set username = email
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      // do something here

      console.log('New user:', user);
    } catch (error) {
      console.log('Failed to register:', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
