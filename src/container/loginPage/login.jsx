import React from 'react'
import Layout from '../../component/layout/layout.component'
import Login from '../../component/layout/UI/login.component/login.component'
import './login.styles.scss'
/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {
  return(
    <Layout>
    <div className="loginContainer">
    <div className="login-side-image">
      <img src="https://powerdigitizing.com/img/vec_img.jpg"/>
    </div>
    <div className="side-login">
    <Login/>
    </div>
      
    </div>
    </Layout>
    
   )

 }

export default LoginPage