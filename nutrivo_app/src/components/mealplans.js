import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
    return this.state.meals.map(meal => <Text>{meal.title}</Text>);
  }

  render() {
    return (
      <View>
      {this.renderMeals()}
      </View>
    );
  }
}

// const styles = {
//   mealText: {
//   paddingTop: 80,
//   color: '#000000'
//   }
// };

export default MealPlans;
