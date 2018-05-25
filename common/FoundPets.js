import React, { Component, Fragment } from 'react';
import { db } from '../static/firebase';

export class FoundPets extends Component {

  state = {
    pets: [],
    loadingPets: true,
  }

  getAllFoundPets () {
    this.setState({ loadingPets: true });
    return db.collection('found').get().then((pets) => {
      this.setState({ loadingPets: false, pets });
    }, () => {
      this.setState({ loadingPets: false, pets: [] });
    });
  }

  render() {
    const { pets, loadingPets } = this.state;
    return (
      <Fragment>
        {this.props.render({ pets, loadingPets })}
      </Fragment>
    );
  }
}