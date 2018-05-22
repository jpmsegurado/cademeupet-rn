import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import TabScreen from './TabScreen';
import User from '../common/User';
import { logInUser } from '../actions/user';
import { auth } from '../static/firebase';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppNavigatorLogged = createStackNavigator({
  Home: {
    screen: TabScreen,
    navigationOptions: {
      header: null
    }
  }
});

class MainScreen extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    auth.onAuthStateChanged(({ email, displayName }) => this.props.setUser({email ,displayName}));
  }

  getNavigation() {
    
    if (this.props.user.email) {
      return (<AppNavigatorLogged />);
    } else {
      return (<AppNavigator />);
    }
  }

  render() {
    return (
      <Container>
        {this.getNavigation()}
      </Container>
    );
  }
}

const styles = {
  content: {
    padding: 20,
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(logInUser(user))
})

export default connect(state => state, mapDispatchToProps)(MainScreen);