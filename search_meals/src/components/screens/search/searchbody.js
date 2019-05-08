import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import DefaultMealList from './defaultmeallist';

class SearchBody extends Component {
  render() {
    const recipe = this.props.data;

    if (!recipe) {
      return <View />;
    }
    console.log('receiving recipe details:');
    console.log(recipe.name);
    return (
      <ScrollView style={{ flex: 1 }}>
        <DefaultMealList />
      </ScrollView>
    );
  }
}
// Return the following
// <Text style={styles.header}> #{recipe.id} - {recipe.name}</Text>

export default SearchBody;
