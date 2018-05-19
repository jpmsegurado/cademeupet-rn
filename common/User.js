import React, { Fragment, Component } from 'react';
import firebase from 'firebase'
import 'firebase/firestore';

export default class User extends Component {

  constructor() {
    super();
    var config = {
      apiKey: "AIzaSyDA0Ff4pKwvctBFwOfeebOY9DHfpraSV6s",
      authDomain: "cademeupet-9e92f.firebaseapp.com",
      databaseURL: "https://cademeupet-9e92f.firebaseio.com",
      projectId: "cademeupet-9e92f",
      storageBucket: "cademeupet-9e92f.appspot.com",
      messagingSenderId: "1089022243588"
    };
    const app = firebase.initializeApp(config)
    this.db = firebase.firestore(app);
    this.auth = firebase.auth(app);
    this.signIn = this.signIn.bind(this);
  }

  signIn (email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  render() {
    const signIn = this.signIn;

    return (
      <Fragment>
        {this.props.render({ signIn })}
      </Fragment>
    )
  }
}