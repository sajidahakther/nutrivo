import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const MealDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.meal1.title}</Text>
      </CardSection>
    </Card>
  );
};

export default MealDetail;
