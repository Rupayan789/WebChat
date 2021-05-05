import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { isLoggedInUser, signIn } from '../../../../redux/action/auth.action';
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
     const dispatch=useDispatch();
     const auth=useSelector(state=>state.auth);
     

     const onSignIn=(e)=>{
         e.preventDefault();
         if(email=='')
         {
             alert("Enter the email");
             return;
         }
         if(password=='')
         {
             alert("Enter the password");
             return;
         }
         dispatch(signIn({email,password}))
     }
     
     if(auth.authenticated)
     {
         return <Redirect to={'/'}/>
     }
  return(
    <div className="login-card">
        <div className="login-header">
            <h2>Login</h2>
        </div>
        <p>Enter your Email and Password</p>
        <form autoComplete="off" onSubmit={onSignIn}>
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