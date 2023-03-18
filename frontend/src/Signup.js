import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate()

  //const [errors, setErrors] = useState({});
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    setErrors(Validation(values));
    console.log("just right before axios")
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      console.log("just after axios");  
      axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log("Error:" + err))
    }
    event.preventDefault();
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={handleInput}
              type='text'
              placeholder='Enter Name'
              className='form-control rounded-0'
              name='name'
            />
            {errors.name && (
              <span className='text-danger'> {errors.name} </span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleInput}
              type='email'
              placeholder='Enter Email'
              className='form-control rounded-0'
              name='email'
            />
            {errors.email && (
              <span className='text-danger'> {errors.email} </span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleInput}
              type='password'
              placeholder='Enter Password'
              className='form-control rounded-0'
              name='password'
            />
            {errors.password && (
              <span className='text-danger'> {errors.password} </span>
            )}
          </div>
          <button id='signup' type='submit' onClick={handleSubmit} className='btn btn-success w-100'>
            <strong>Sign Up</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to='/'
            className='btn btn-default border w-100 bg-light text-decoration-none'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
