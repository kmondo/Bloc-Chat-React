import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDAo97gVpVlHVNNznKtpVt68CAuujEojI",
    authDomain: "bloc-chat-react-f0628.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-f0628.firebaseio.com",
    projectId: "bloc-chat-react-f0628",
    storageBucket: "bloc-chat-react-f0628.appspot.com",
    messagingSenderId: "933547245569"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
