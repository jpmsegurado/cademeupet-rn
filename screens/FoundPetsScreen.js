import React, { Component } from 'react';
import { Container, Text, Content, View } from 'native-base';
import LostPetCard from '../common/LostPetCard';

export default class FoundPetsScreen extends Component {
  
  state = {
    pets: [1,2,3,4,5,6]
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Content>
          {this.state.pets.map((item) => (<LostPetCard key={item}/>))}
        </Content>
      </View>
    );
  }
}