import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class MealPlans extends Component {
  state = { meals: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ meals: response.data }));
  }

  renderMeals() {
    const { mealText } = styles;

    this.state.meals.map(meal => <Text style={mealText}>{meal.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
      {this.renderMeals()}
      </View>
    );
}
}

const styles = {
  mealText: {
  paddingTop: 80,
  color: '#000000'
  }
};

export default MealPlans;
