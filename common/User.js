import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions/user';
import { db, auth } from '../static/firebase';



class User extends Component {
  
  state = {};

  constructor(props) {
    super();
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount () {
    this.db = db
    this.auth = auth;
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

const mapDispatchToProps = dispatch => ({
  setUser: (user) => {
    dispatch(logInUser(user))
  }
})

export default connect(state => state, mapDispatchToProps)(User);