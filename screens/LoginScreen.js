import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label
} from 'native-base';
import Expo from 'expo';
import User from '../common/User';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { logInUser } from '../actions/user';
import TabScreen from './TabScreen';

class LoginScreen extends React.Component {

  state = {
    loading: false,
    form: {
      email: 'jpmsegurado@gmail.com',
      password: '123123',
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255,255,255,.19)',
      elevation: 0,
    },
  }

  logoURI = Expo.Asset.fromModule(require('../images/logo.png'))
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, value) {
    const form = this.state.form;
    this.setState({
      form: {
        ...form,
        [name]: value
      }
    });
  }

  onSubmit(signIn, { email, password }) {
    this.setState({ loading: true })
    signIn(email, password).then((resp) => {
      this.setState({ loading: false })
      const user = resp.user.providerData[0];
      this.props.setUser(user);
      this.props.navigation.navigate('Tab');
    }).catch((resp) => {
      this.setState({ loading: false })
    });
  }

  render() {
    return (
      <User render={({ signIn }) => (<Container>
        <Content style={styles.content}>
          <KeyboardAwareScrollView>
            <View>
              <Form style={styles.form} >
                <Image source={this.logoURI} style={{ width: 200, height: 200 }} />
                <Item floatingLabel>
                  <Label style={styles.label}>E-mail</Label>
                  <Input
                    defaultValue={this.state.email}
                    onChangeText={(text) => this.onChange('email', text)}
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    returnKeyType='next' />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.label}>Senha</Label>
                  <Input
                    defaultValue={this.state.password}
                    onChangeText={(text) => this.onChange('password', text)}
                    style={styles.input}
                    secureTextEntry={true}
                    login
                    returnKeyType='send' />
                </Item>
                <Button
                  disabled={this.state.loading}
                  onPress={() => this.onSubmit(signIn, this.state.form)}
                  full
                  style={!this.state.loading ? styles.button : styles.buttonDisabled}
                  androidRippleColor='#1e5d4e'>
                  <Text style={{ color: '#1e5d4e' }}>
                    {this.state.loading ? 'Carregando' : 'Entrar'}
                  </Text>
                </Button>
              </Form>
            </View>
          </KeyboardAwareScrollView>
        </Content>
      </Container>)
      } />
    );
  }
}

const styles = {
  input: {
    color: '#fff'
  },
  label: { color: '#fff' },
  content: {
    backgroundColor: '#1e5d4e',
    padding: 20,
    paddingTop: 50
  },
  form: {
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  buttonDisabled: {
    marginTop: 20,
    backgroundColor: '#ffffff4D',
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (user) => {
    dispatch(logInUser(user))
  }
})

export default connect(state => state, mapDispatchToProps)(LoginScreen);