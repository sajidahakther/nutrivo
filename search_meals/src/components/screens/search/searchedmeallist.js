import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import SearchBody from './searchbody';


class SearchedMealList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.renderMeals = this.renderMeals.bind(this);
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/oos7e')
      .then(response => this.setState({ meals: response.data }));
  }

  renderMeals() {
    return this.state.meals.map(meal =>
      <SearchBody key={meal.title} meal1={meal} />
    );
  }

  render() {
    return (
      <ScrollView>
      {this.renderMeals()}
      </ScrollView>
    );
  }
}

export default SearchedMealList;
