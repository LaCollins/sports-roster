import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

render() {

  return (
    <div className="Auth">
      <button className="btn btn-outline-info" onClick={this.loginClickEvent}>Log In</button>
    </div>
  )
}
}

export default Auth;
