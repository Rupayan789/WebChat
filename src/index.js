import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import { store } from './redux/store/store';


const firebaseConfig = {
  apiKey: "AIzaSyB2sWLJqlpblZM3JAVXIzbFe4Wc5hWUgco",
  authDomain: "webchat-fce31.firebaseapp.com",
  projectId: "webchat-fce31",
  storageBucket: "webchat-fce31.appspot.com",
  messagingSenderId: "317300829739",
  appId: "1:317300829739:web:eda54eca9fd4499ebf046e",
  measurementId: "G-74H5GX4GYP"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
