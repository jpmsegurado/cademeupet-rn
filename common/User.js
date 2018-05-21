import React, { Fragment, Component } from 'react';
import firebase from 'firebase'
import 'firebase/firestore';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 1000 * 3600 * 24,
	enableCache: true,
});

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

  saveUser(user) {
    return storage.save({
      key: 'user',
      id: 'user',
      data: user,
      expires: 1000 * 60
    });
  }

  render() {
    const signIn = this.signIn;
    const saveUser = this.saveUser;

    return (
      <Fragment>
        {this.props.render({ signIn, saveUser })}
      </Fragment>
    )
  }
}