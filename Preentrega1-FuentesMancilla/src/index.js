import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyC3icKfpDd6b5HSokxKDCMlae0cj3XOkPY",
  authDomain: "esquinas3d.firebaseapp.com",
  projectId: "esquinas3d",
  storageBucket: "esquinas3d.appspot.com",
  messagingSenderId: "102867860458",
  appId: "1:102867860458:web:7002bd8dfde3970fed9093",
  measurementId: "G-LXQ4HC72W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
