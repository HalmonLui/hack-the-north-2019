import React from "react";
import { Component } from "react";
import "../App.css";
import {
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    if (user) {
      global.name = "👋 Hello " + user.displayName.split(" ", 1) + "!";
    } else {
      global.name = "🍔 Welcome to Chef Boost!";
    }

    return (
      <div className="login">
        <div className="loginform">
          <h2>Login</h2>
          <input
            type="text"
            className="logininput"
            placeholder="   Username"
            name="name"
          />
          <input
            type="text"
            className="logininput"
            placeholder="   Password"
            name="name"
          />
          <button className="loginButton" onClick={signInWithGoogle}>
            Sign In
          </button>
          {user ? (
            <button className="loginButton" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <button className="loginButton" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
