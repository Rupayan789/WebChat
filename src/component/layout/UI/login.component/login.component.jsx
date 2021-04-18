import React, { useState } from 'react'
import CustomButton from '../customButton/customButton.component';
import FormInput from '../Form-Input/formInput.component'
import './styles.scss'
/**
* @author
* @function Login
**/

const Login = (props) => {

     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
  return(
    <div className="login-card">
        <div className="login-header">
            <h2>Login</h2>
        </div>
        <p>Enter your Email and Password</p>
        <form autoComplete="off">
            <div className="login-form">
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
        <div className="btns">
            <CustomButton type="submit">Sign In</CustomButton>
            <span>or</span>
            <CustomButton isgooglesignin="true">Sign In with Google</CustomButton>
        </div>
        </form>
        
        
    </div>
   )

 }

export default Login