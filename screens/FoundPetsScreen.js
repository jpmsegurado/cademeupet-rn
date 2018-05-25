import React, { Component } from 'react';
import { Container, Text, Content, View } from 'native-base';
import LostPetCard from '../components/LostPetCard';
import { FoundPets } from '../common/FoundPets';

export default class FoundPetsScreen extends Component {
  
  state = {
    pets: [],
    loading: true
  }

  constructor() {
    super();
    this.onInit = this.onInit.bind(this);
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <FoundPets render={({ pets, loadingPets }) => (
          <Content >
            {!loadingPets && pets.map((item) => (<LostPetCard key={item}/>))}
          </Content>
        )} />
      </View>
    );
  }
}