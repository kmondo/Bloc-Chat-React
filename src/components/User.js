import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };

    // this.setState({username: ""})

    this.userRef = this.props.firebase.database().ref('user');
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    console.log('signing-in');
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signOut() {
    this.props.firebase.auth().signOut();
    console.log('signing out')
  }


  render() {

    // this.state.username
      let userName = "Guest";
        if (this.props.user) {
          userName = this.props.user.displayName;
          //!this.props.user ? 'Guest' : this.props.user.displayName
        }
    //removed from line 37: this.props.user.displayName;
    //added onChange to line 44 to try to get Current User displayed in browser
          return(
            <section>
              <div onChange={this.props.user}>Current User:{userName}</div>
              <button className='sign-in' onClick={this.signIn}>Sign In</button>
              <button className='sign-out' onClick={this.signOut}>Sign Out</button>
            </section>
    )
  }
}

export default User;
