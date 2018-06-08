import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };

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
          return(
            <section>
              <button className='sign-in' onClick={this.signIn}>Sign In</button>
              <button className='sign-out' onClick={this.signOut}>Sign Out</button>
            </section>
    )
  }
}

export default User;
