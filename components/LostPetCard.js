import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H3
} from 'native-base';

export default class LostPetCard extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image 
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={{ height: 150, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Body>
            <H3>Draco</H3>
            <Text style={{color: '#999'}}>Gato Preto</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Icon name='pin' style={{color: '#999'}} />
          <Text style={{color: '#999'}}>7km de distância</Text>
        </CardItem>
      </Card>
    );
  }
}