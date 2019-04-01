import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import MealDetail from './mealdetail';

class MealPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.renderMeals = this.renderMeals.bind(this);
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ meals: response.data }));
  }

  renderMeals() {
    return this.state.meals.map(meal =>
      <MealDetail key={meal.title} meal1={meal} />
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

export default MealPlans;
