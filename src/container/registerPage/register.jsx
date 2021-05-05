import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Layout from '../../component/layout/layout.component'
import Register from '../../component/layout/UI/signUp/signUp.component'
import './register.styles.scss';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const auth=useSelector(state=>state.auth);
  if(auth.authenticated)
  return <Redirect to="/"/>
  return(
    <Layout>
    <div className="container">
    <div className="side-image">
      <img src="https://powerdigitizing.com/img/vec_img.jpg"/>
    </div>
    <div className="side-register">
    <Register/>
    </div>
      
    </div>
    </Layout>
    
   )

 }

export default RegisterPage