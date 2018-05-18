import React, { Component } from 'react';
// import logo from './logo.jpeg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBDAo97gVpVlHVNNznKtpVt68CAuujEojI",
  //   authDomain: "bloc-chat-react-f0628.firebaseapp.com",
  //   databaseURL: "https://bloc-chat-react-f0628.firebaseio.com",
  //   projectId: "bloc-chat-react-f0628",
  //   storageBucket: "bloc-chat-react-f0628.appspot.com",
  //   messagingSenderId: "933547245569"
  // };
  // firebase.initializeApp(config);

class App extends Component {

constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyBDAo97gVpVlHVNNznKtpVt68CAuujEojI",
    authDomain: "bloc-chat-react-f0628.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-f0628.firebaseio.com",
    projectId: "bloc-chat-react-f0628",
    storageBucket: "bloc-chat-react-f0628.appspot.com",
    messagingSenderId: "933547245569"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
        <div className="container">
            {/* <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6"> */}
                <RoomList firebase={firebase} />
              {/* </div>
            </div> */}
        </div>
              /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <p className="App-intro">
          Pic a topic and chat away!
        </p> */
    );
  }
}

export default App;
