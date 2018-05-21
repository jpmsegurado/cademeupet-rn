import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoundPetsScreen from './FoundPetsScreen';
import LostPetsScreen from './LostPetsScreen';
import { View, Content, Header, Body, Title, Container, Text, Tabs, Tab } from 'native-base';

class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Início</Title>
          </Body>
        </Header>
        <Content>
          <Tabs locked>
            <Tab heading={'tab1'}>
              <FoundPetsScreen />
            </Tab>
            <Tab heading={'tab1'}>
              <LostPetsScreen />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default connect(state => state)(TabScreen);