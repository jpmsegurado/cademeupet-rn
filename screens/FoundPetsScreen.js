import React, { Component } from 'react';
import { Container, Text, Content, View } from 'native-base';
import LostPetCard from '../components/LostPetCard';
import { FoundPets } from '../common/FoundPets';
import BlankState from '../components/BlankState';

export default class FoundPetsScreen extends Component {
  
  state = {
    pets: [],
    loading: true
  }

  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <FoundPets render={({ pets, loadingPets }) => (
          <Content >
            {!loadingPets && pets.length > 0 && pets.map((item) => (<LostPetCard key={item}/>))}
            {!loadingPets && pets.length === 0 && <BlankState icon='emoticon-sad' text='Nada ainda'/>}
          </Content>
        )} />
      </View>
    );
  }
}