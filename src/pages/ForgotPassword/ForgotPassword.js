import './ForgotPassword.css'

import React from 'react'
// import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const forgotPasswordSchema = Yup.object().shape({

    userEmail: Yup.string("** Email must be a string")
      .email("** Enter a valid email")
      .required("** Email cannot be empty"),

    userPassword: Yup.string("** Please enter a valid passowrd")
      .min(6, "** Password must contain 6 characters")
      .max(15, "** Password must not contain more than 15 characters")
      .required("** Password cannot be empty")
      .matches(/^(?=.*[a-z])/, "** Password must contains atleast a lowercase character")
      .matches(/^(?=.*[A-Z])/, "** Password must contain atleast a uppercase character")
      .matches(/^(?=.*[0-9])/, "** Password must contain atleast a number"),

    userConfirmPassword: Yup.string("** Please Enter a valid password")
      .min(6, "** Password must contain 6 characters")
      .max(15, "** Password must not contain more than 15 characters")
      .required("** Password cannot be empty")
      .matches(/^(?=.*[a-z])/, "** Password must have atleast a lowercase character")
      .matches(/^(?=.*[A-Z])/, "** Password must have atleast a uppercase character")
      .matches(/^(?=.*[0-9])/, "** password must have atleast a number")
      .oneOf([Yup.ref("userPassword"), null], "** Password must match")

  })

  // const [initialForgotPasswordValue, setInitialForgotPassowrdValue] = useState({
  //   userEmail: "",
  //   userPassword: "",
  //   userConfirmPassword: ""
  // })
  const initialForgotPasswordValue={
    userEmail: "",
    userPassword: "",
    userConfirmPassword: ""
  }
  const nav = useNavigate()

  const handleResetPassword = (values,{resetForm}) => {
    // setInitialForgotPassowrdValue(values)
    alert("You are successfully reset your password...")
    resetForm({values:""})
    nav("/login", true)
  }

  

  return (
    <div className='forgot-password'>
      <h2 className='heading'>Reset Password</h2>

      <div>
        <Formik validationSchema={forgotPasswordSchema} initialValues={initialForgotPasswordValue} onSubmit={handleResetPassword}>
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

                <div className='input'>
                  <label>Confirm Password:</label>
                  <Field type="password" name="userConfirmPassword" placeholder='Password Confirm' autoComplete="off" />

                  {errors.userConfirmPassword && touched.userConfirmPassword ? (<span className='error'>{errors.userConfirmPassword}</span>) : null}
                </div>

                <button type='submit'  id='reset'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg> Reset Password</button>

              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>)
}

export default ForgotPassword