import React, { Component } from 'react';
import { Container, Text, Content, View } from 'native-base';

export default class LostPetsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Content>
          <Text>
            Achados
          </Text>
        </Content>
      </View>
    );
  }
}