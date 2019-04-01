import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import MealPlans from './src/components/mealplans';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
      <Header screenTitle={'MEALS'} />
      <MealPlans />
      </View>
    );
  }
}
