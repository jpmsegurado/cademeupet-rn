import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FoundPetsScreen from './FoundPetsScreen';
import LostPetsScreen from './LostPetsScreen';
import { ScrollView } from 'react-native';
import { View, Content, Header, Body, Title, Container, Text, Tabs, Tab, Footer, FooterTab, Button, Icon, Fab } from 'native-base';
import { FoundPets } from '../common/FoundPets';

class TabScreen extends Component {

  state = {
    tabIndex: 0,
    active: false
  };

  constructor() {
    super();
    this.changeTabIndex = this.changeTabIndex.bind(this);
  }

  changeTabIndex(tabIndex) {
    this.setState({ tabIndex })
  }

  renderTab(index) {
    return this.state.tabIndex === index ? { display: 'flex' } : { display: 'none' };
  }
  
  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#164339' style={{ backgroundColor: '#1e5d4e' }}>
          <Body>
            <Title>Início</Title>
          </Body>
        </Header>
        <Content >
          {this.state.tabIndex === 0 ? 
            <FoundPetsScreen /> : 
            <LostPetsScreen />}
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.changeTabIndex(0)}
              active={this.state.tabIndex === 0}
              style={styles.tab}>
              <Icon name='paw' />
              <Text>Pets encontrados</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              onPress={() => this.changeTabIndex(1)}
              active={this.state.tabIndex === 1}
              style={styles.tab}>
              <Icon name='search' />
              <Text>Pets desaparecidos</Text>
            </Button>
          </FooterTab>
        </Footer>
        <Fab
          containerStyle={{ marginBottom: 50 }}
          style={{ backgroundColor: '#1e5d4e' }}
          position="bottomRight"
          onPress={() => this.props.navigation.push('AddFoundPet')}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

const styles = {
  tab: { backgroundColor: '#1e5d4e'}
};

export default connect(state => state)(TabScreen);