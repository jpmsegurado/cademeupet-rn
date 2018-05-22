import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FoundPetsScreen from './FoundPetsScreen';
import LostPetsScreen from './LostPetsScreen';
import { ScrollView } from 'react-native';
import { View, Content, Header, Body, Title, Container, Text, Tabs, Tab, Footer, FooterTab, Button } from 'native-base';

class TabScreen extends Component {

  state = {
    tabIndex: 0
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
        <Header androidStatusBarColor='#1e5d4e' style={{ backgroundColor: '#1e5d4e' }}>
          <Body>
            <Title>Início</Title>
          </Body>
        </Header>
        <Content >
          <Content style={this.renderTab(0)}>
            <FoundPetsScreen/>
          </Content>
          <Content style={this.renderTab(1)}>
            <LostPetsScreen />
          </Content>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.changeTabIndex(0)}
              active={this.state.tabIndex === 0}
              style={styles.tab}>
              <Text>Achados</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              onPress={() => this.changeTabIndex(1)}
              active={this.state.tabIndex === 1}
              style={styles.tab}>
              <Text>Perdidos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  tab: { backgroundColor: '#1e5d4e'}
};

export default connect(state => state)(TabScreen);