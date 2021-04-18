import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import './App.css';
import Homepage from './container/homePage/homepage';
import Loginpage from './container/loginPage/login';
import RegisterPage from './container/registerPage/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Homepage}/>
        <Route path="/login" component={Loginpage}/>
        <Route path="/register" component={RegisterPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
