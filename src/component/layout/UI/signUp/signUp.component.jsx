import React, { useState } from 'react'
import CustomButton from '../customButton/customButton.component';
import FormInput from '../Form-Input/formInput.component'
import './styles.scss'
/**
* @author
* @function Login
**/

const Register = (props) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
  return(
    <div className="register-card">
        <div className="register-header">
            <h2>Register</h2>
        </div>
        <p>Enter all your Credentials</p>
        <form autoComplete="off">
            <div className="register-form">
            <FormInput
            type="text"
            name="firstName"
            label="firstName"
            handleChange={(e)=>setFirstName(e.target.value)}
            value={firstName}/>
            <FormInput
            type="text"
            name="lastName"
            label="lastName"
            handleChange={(e)=>setLastName(e.target.value)}
            value={lastName}/>
            <FormInput
            type="text"
            name="email"
            label="email"
            handleChange={(e)=>setEmail(e.target.value)}
            value={email}/>
            <FormInput
            type="password"
            name="password"
            label="password"
            handleChange={(e)=>setPassword(e.target.value)}
            value={password}/>
        </div>
        <div className="btns-register">
            <CustomButton type="submit">Sign Up</CustomButton>
        </div>
        </form>
        
        
    </div>
   )

 }

export default Register