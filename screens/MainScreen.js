import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import TabScreen from './TabScreen';

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

export default connect(state => state)(MainScreen);