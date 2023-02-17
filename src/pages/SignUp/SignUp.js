import "./SignUp.css"

import * as Yup from "yup"

import { Field, Form, Formik } from "formik"
import React from 'react'
// import { useState } from 'react'

import { Link } from 'react-router-dom'

export default function SignUp() {



  const submitSchema = Yup.object().shape(
    {
      firstName: Yup.string("** Enter a valid name")
        .min(3, "** Firstname must be 3 character")
        .required("** Firstname cann't be empty")
        .max(20, "** Firstname not more than 20 character"),

      lastName: Yup.string("** Enter a valid lastname")
        .min(3, "** Lastname must be 3 character")
        .max(20, "** Lastname not more than 20 character")
        .required("** Last name cann't be empty"),

      userEmail: Yup.string("** Email must be a string")
        .email("** Enter a valid format")
        .required("** Email cannot be empty"),

      userPassword: Yup.string("** Please enter valid password")
        .min(6, "** Password length must be 6 character")
        .max(15, "** Password length cannot be more than 15 charcter")
        .required("** Password cannot be empty")
        .matches(/^(?=.*[a-z])/, "** Password must contains atleast a lowercase character")
        .matches(/^(?=.*[A-Z])/, "** Password must contains atleast a uppercase character")
        .matches(/^(?=.*[0-9])/, "** Password must contains atleast a number "),

      userConfirmPassword: Yup.string("** Please enter valid password")
        .min(6, "** Password length must be 6 character")
        .max(15, "** password length cannot be more than 15 charcter")
        .required("** Password cannot be empty")
        .matches(/^(?=.*[a-z])/, "** Password must contains atleast a lowercase character")
        .matches(/^(?=.*[A-Z])/, "** Password must contains atleast a uppercase character")
        .matches(/^(?=.*[0-9])/, "** Password must contains atleast a number ")
        .oneOf([Yup.ref('userPassword'), null], "** Password must match")

    })

  // const [initialSignUpValue, setInitialSignUpValue] = useState({
  //   firstName: "",
  //   lastName: "",
  //   userEmail: "",
  //   userPassword: "",
  //   userConfirmPassword: ""
  // })
  const initialSignUpValue = {
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: ""
  }
  const handleSignUp = (values, { resetForm }) => {
    // setInitialSignUpValue(values)
    // console.log(initialSignUpValue)
    alert("You are successfully registered...")
    resetForm({ values: "" })
  }


  return (
    <div className='signup'>
      <h2 className='heading'>Sign Up</h2>

      <div>
        <Formik validationSchema={submitSchema} initialValues={initialSignUpValue} onSubmit={handleSignUp}>
          {({ errors, touched }) => {
            return (

              <Form autoComplete="off" >
                <div className='input'>
                  <label>First Name:</label>
                  <Field type="text" name="firstName" placeholder='First Name' autoComplete="off" />
                  {errors.firstName && touched.firstName ? (<span className='error'>{errors.firstName}</span>) : null}
                </div>

                <div className='input'>
                  <label>Last Name:</label>
                  <Field type="text" name="lastName" placeholder='Last Name' autoComplete="off" />
                  {errors.lastName && touched.lastName ? (<span className='error'>{errors.lastName}</span>) : null}
                </div>

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

                <div className='input'>
                  <label>Confirm Password:</label>
                  <Field type="password" name="userConfirmPassword" placeholder='Password Confirm' autoComplete="off" />

                  {errors.userConfirmPassword && touched.userConfirmPassword ? (<span className='error'>{errors.userConfirmPassword}</span>) : null}

                </div>

                <div className='login-link'><span>Already have an account? Login </span><span> <Link to='/login'>here</Link></span></div>

                <button type='submit' id='signup'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                </svg> Sign Up</button>
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  )
}