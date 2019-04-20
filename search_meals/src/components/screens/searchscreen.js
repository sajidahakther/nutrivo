import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import axios from 'axios';
import { Header, Item, Icon, Input } from 'native-base';
import MealLoader from './search/mealloader';
import SearchBody from './search/searchbody';
// import MealDetail from './search/mealdetail';

class SearchScreen extends Component {
  state = {
    mealSearcher: '',
    onCall: true,
    data: {}
  }

  searchMeals = () => {
    console.log('it works');
    this.setState({ onCall: true });
    const self = this;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.mealSearcher.toLowerCase()}`)
      .then((response) => {
        console.log(response.data);
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderBody = () => {
    if (this.state.onCall) {
      return (
        <MealLoader />
      );
    }
      return (
        <SearchBody data={this.state.data} />
      );
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
          onChangeText={(searchMeals) => this.setState({ searchMeals })}
        />
      </Item>
      </Header>
      {this.renderBody()}
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
