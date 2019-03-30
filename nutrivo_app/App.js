import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header screenTitle={'OVERVIEW'} />
    );
  }
}
