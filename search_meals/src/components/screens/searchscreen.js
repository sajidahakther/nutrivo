import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
// import axios from 'axios';
// import MealDetail from './search/mealdetail';

class SearchScreen extends Component {
  state = {
    searchMeals: ''
  }
  searchMeals = () => {

  }
render() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Header
      searchBar
      rounded
    >
    <Item>
      <Icon name="ios-search" onPress={this.searchMeals} />
      <Input
        value={this.state.searchMeals}
        placeholder="Search Meals"
        onChangeText={(searchMeals)=>this.setState({searchMeals})}
      />
    </Item>
    </Header>
    </View>
    </ScrollView>
  );
}
}

const styles = {
  container: {
    flex: 1,
  }
};

export default SearchScreen;
