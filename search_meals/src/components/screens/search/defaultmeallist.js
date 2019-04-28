import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import MealDetail from './mealdetail';


class DefaultMealList extends Component {
  state = { meals: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ meals: response.data }));
  }

  renderMeals() {
    return this.state.meals.map(meal =>
      <MealDetail key={meal.title} meal={meal} />
    );
  }

  render() {
    return (
      <View>
        {this.renderMeals()}
      </View>
    );
  }
}

export default DefaultMealList;
