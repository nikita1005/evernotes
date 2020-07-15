import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: "AIzaSyBr19mHyEGs2_tkq3gdMNUv7jKkfBEplAA",
  authDomain: "evernote-clone-8e284.firebaseapp.com",
  databaseURL: "https://evernote-clone-8e284.firebaseio.com",
  projectId: "evernote-clone-8e284",
  storageBucket: "evernote-clone-8e284.appspot.com",
  messagingSenderId: "140368307642",
  appId: "1:140368307642:web:e5555d642ae56584a06983",
  measurementId: "G-1T3SX1N50P"
});
//firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
