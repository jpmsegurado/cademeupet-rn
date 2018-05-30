import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, View, Icon, Text } from 'native-base';

export default class BlankState extends Component {
  render() {
    return (
      <Content style={styles.content}>
        {/* <Icon name={`${this.props.icon}`} /> */}
        <Text>{this.props.text}</Text>
      </Content>
    )
  }
}

const styles = {
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}