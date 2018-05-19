import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import { Root, Container } from 'native-base';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default class App extends React.Component {


  state = {
    loading: true
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false })
  }

  render () {
    return (
      <Root >
        {!this.state.loading && <Container style={{ paddingTop: StatusBar.currentHeight}}>
          <StatusBar backgroundColor='#164339' />
          <AppNavigator />
        </Container>}
      </Root>
    )
  }
}


