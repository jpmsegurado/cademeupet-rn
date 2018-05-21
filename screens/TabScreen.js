import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Content, Header, Body, Title, Container, Text } from 'native-base';

class TabScreen extends Component {
  render() {
    console.log(this.props.user);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Início</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Text>{this.props.user.email}</Text>
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    padding: 20,
  }
}

export default connect(state => state)(TabScreen);