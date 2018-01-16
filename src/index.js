import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyCSt2BwfGEM1_2xuS34pLBM_nu4dkOOGlk",
    authDomain: "hindsight-world.firebaseapp.com",
    databaseURL: "https://hindsight-world.firebaseio.com",
    projectId: "hindsight-world",
    storageBucket: "hindsight-world.appspot.com",
    messagingSenderId: "799902273453"
  };
  
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
