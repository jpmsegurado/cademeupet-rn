import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import { Root, Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import TabScreen from './screens/TabScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Tab: {
    screen: TabScreen,
    navigationOptions: {
      header: null
    }
  },
});

const store = createStore(rootReducer);

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
      <Provider store={store}>
        <Root >
          {!this.state.loading && <Container style={{ paddingTop: StatusBar.currentHeight}}>
            <StatusBar backgroundColor='#164339' />
            <AppNavigator />
          </Container>}
        </Root>
      </Provider>
    )
  }
}


