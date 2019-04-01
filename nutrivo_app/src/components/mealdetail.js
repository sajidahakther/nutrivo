import React from 'react';
import { View, Text } from 'react-native';

const MealDetail = (props) => {
  return (
    <View>
      <Text>{props.meal1.title}</Text>
    </View>
  );
};

export default MealDetail;
