import React, { Component, Fragment } from 'react';
import { db } from '../static/firebase';
import { Content } from 'native-base';

export class FoundPets extends Component {

  state = {
    pets: [],
    loadingPets: true,
  }

  getAllFoundPets () {
    this.setState({ loadingPets: true });
    return db.collection('found').get().then((resp) => {
      const pets = resp.docs;
      console.log(pets);
      this.setState({ loadingPets: false, pets });
    }, () => {
      this.setState({ loadingPets: false, pets: [] });
    });
  }

  componentDidMount () {
    this.getAllFoundPets();
  }

  render() {
    const { pets, loadingPets } = this.state;
    return (
      <Content>
        {this.props.render({ pets, loadingPets })}
      </Content>
    );
  }
}