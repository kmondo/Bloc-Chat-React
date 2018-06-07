import React, { Component } from 'react';
import logo from './logo.jpeg';
// import ReactDOM from 'react';
import './App.css';
// import './RoomList.css'
// import './MessageList.css';
// import './User.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      currentUser: ''
    }
  }

    activeRoom(room) {
      this.setState({activeRoom: room});
    }

    setUser(user) {
      this.setState({currentUser: user});
    }

  render() {
    return (
      <section>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="text message" />
        <h1 className="App-title">Bloc Chat</h1>
        </header>
      {/* <p className="App-intro">
        Pic a topic and chat away!
      </p> */}
        <nav className="container">
          <h1>Available Rooms</h1>
          <ul>
            <RoomList
                firebase={ firebase }
                activeRoom={this.activeRoom.bind(this)}
            />
            <User
              firebase={ firebase }
              setUser={this.setUser.bind(this)}
              currentUser={this.state.currentUser}
            />
          </ul>
        </nav>
        <h2>Current User: {this.state.currentUser ? this.state.currentUser.displayName : 'Guest'}</h2>
        <h3>Active Room: {this.state.activeRoom.name}</h3>
        <MessageList
          firebase={ firebase }
          activeRoom={this.state.activeRoom}
          user={this.state.currentUser}
        />
      </section>
    );
  }
}

export default App;
