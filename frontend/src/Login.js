import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation'
import axios from 'axios';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
      email: '',
      password: '',
    });

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
      setErrors(Validation(values))
      console.log(values)
      console.log('just before axios ' + values.email + " " + values.password)
      
      if (errors.email === '' && errors.password === '') {
        console.log('just after axios');
        axios.post('http://localhost:8081/login', values)
          .then(res => {
            if (res.data === 'Success') {
              navigate('/home')
            } else {
              alert('No records found.')
            }
          })
          .catch(err => console.log("Error:" + err))
      } else {
        console.log("did not gothru if condition")
      }
      event.preventDefault();
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={handleInput}
              type='email'
              placeholder='Enter Email'
              className='form-control rounded-0'
              name='email'
              id='email'
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
              id='password'
            />
            {errors.password && (
              <span className='text-danger'> {errors.password} </span>
            )}
          </div>
          <button id='login' type='submit' onClick={handleSubmit} className='btn btn-success w-100'>
            <strong>Log In</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to='/signup'
            className='btn btn-default border w-100 bg-light text-decoration-none'
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login
