import React from 'react'
import Layout from '../../component/layout/layout.component'
import Register from '../../component/layout/UI/signUp/signUp.component'
import './register.styles.scss';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
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