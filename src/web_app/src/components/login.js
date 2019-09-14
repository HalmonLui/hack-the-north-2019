import React from 'react';
import {Component} from 'react';
import '../App.css';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends Component {
  render () {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    if (user){
      global.name = "👋 Hello " + user.displayName.split(" ",1) + "!";
    }
    else {
      global.name = "🍔 Welcome to ChefBoost!";
    }

    return (
      <div className="login">
      {!user && <p>Please sign in.</p>}
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
