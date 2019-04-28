import React from 'react';
import { Text, View } from 'react-native';
// import Card from '../../common/card';
// import CardSection from '../../common/cardsection';
// import Button from '../../common/button';

const MealDetail = (props) => {
  return (
    <View>
      <Text>{props.meal.title}</Text>
    </View>
  );
};

export default MealDetail;
