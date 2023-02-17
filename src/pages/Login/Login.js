import './Login.css'

import * as Yup from "yup"

import { Field, Form, Formik } from 'formik'
import React from 'react'
// import { useState } from "react"

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const loginSchema = Yup.object().shape({

    userEmail: Yup.string("** Email Must be a String")
      .email("** Enter a valid format")
      .required("** Email cannot be empty"),

    userPassword: Yup.string("** Please enter valid password")
      .min(6, "** Password must have 6 characters")
      .max(15, "** Password should not be more than 15 characters")
      .required("** Password cannot be empty")
      .matches(/^(?=.*[a-z])/, "** Password must contains atleast a lowercase character")
      .matches(/^(?=.*[A-Z])/, "** Password must contains atleast a uppercase character")
      .matches(/^(?=.*[0-9])/, "** Password must contains atleast a number ")

  })
  // const [initialLoginValue, setInitialLoginValue] = useState({
  //   userEmail: "",
  //   userPassword: ""
  // })
  let initialLoginValue = {
    userEmail: "",
    userPassword: ""
  }

  let nav=useNavigate()
  const handleLogin = (values,{resetForm}) => {
    // setInitialLoginValue(values)
    alert("You are successfully Login...")
    resetForm({ values: '' })
    nav("/",true)
  }

  return (
    <div className='login' >
      <h2 className='heading'>Login</h2>

      <div>
        <Formik validationSchema={loginSchema} initialValues={initialLoginValue} onSubmit={handleLogin}>
          {({ errors, touched }) => {
            return (
              <Form autoComplete='off'>
                <div className='input'>
                  <label>Email:</label>
                  <Field type="email" name="userEmail" placeholder='Email Address' autoComplete="off" />
                  {errors.userEmail && touched.userEmail ? (<span className='error'>{errors.userEmail}</span>) : null}
                </div>

                <div className='input'>
                  <label>Password:</label>
                  <Field type="password" name="userPassword" placeholder='Password' autoComplete="off" />
                  {errors.userPassword && touched.userPassword ? (<span className='error'>{errors.userPassword}</span>) : null}
                </div>

                <div className='links'><span>Don't have an account? Sign Up </span><span> <Link to='/signup'>here</Link></span></div>
                <div className='links'><span>Have you forgot your password? Click </span><span> <Link to='/forgotPassword'>here</Link></span></div>

                <button type='submit' id='login'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                  <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg> Log In</button>
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  )
}

export default Login