import React, { Component } from 'react';
import logo from './logo.jpeg';
// import ReactDOM from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCl38aI0scyd_td0g2Ir5MJaLopQCa5dGM",
    authDomain: "bloc-chat-react-kmm.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-kmm.firebaseio.com",
    projectId: "bloc-chat-react-kmm",
    storageBucket: "",
    messagingSenderId: "719976829665"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <section>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="text message image" />
        <h1 className="App-title">Bloc Chat</h1>
        </header>
      <p className="App-intro">
        Pic a topic and chat away!
      </p>
        <div className="container">
          <h1>Available Rooms</h1>
          <ul>
            {/* { this.state.rooms.map( (room, firebase) => */}
              <RoomList
                firebase={ firebase }
                // key={ room }
              />
            {/* )} */}
          </ul>
        </div>
       </section>
    );
  }
}

export default App;
