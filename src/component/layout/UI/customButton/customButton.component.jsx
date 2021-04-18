import React from 'react'
import './styles.scss'
/**
* @author
* @function CustomButton
**/

const CustomButton = (props) => {
  return(
    <button {...props} className={props.isgooglesignin?`btn-google`:`btn-custom`}>{props.children}</button>
   )

 }

export default CustomButton