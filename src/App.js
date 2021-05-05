import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Redirect,Route } from 'react-router-dom'
import './App.css';
import PrivateRoute from './component/privateRoute/privateRoute';
import Homepage from './container/homePage/homepage';
import Loginpage from './container/loginPage/login';
import RegisterPage from './container/registerPage/register';
import { isLoggedInUser } from './redux/action/auth.action';

function App() {

  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth);
     useEffect(()=>{
        if(!auth.authenticated)
          dispatch(isLoggedInUser());
     },[])
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute exact path="/" component={Homepage}/>
        <Route path="/login" component={Loginpage}/>
        <Route path="/register" component={RegisterPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
