import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import MealPlans from './src/components/mealplans';
import MealDetail from './src/components/mealdetail'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header screenTitle={'Meals'} />
      <MealPlans />
      </View>
    );
  }
}
