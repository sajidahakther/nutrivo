import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../common/card';
import CardSection from '../../common/cardsection';
import Button from '../../common/button';

const MealDetail = () => {
  return (
    <View>
      <Card>
        <CardSection>
          <Text>hello</Text>
        </CardSection>

        <CardSection>
          <Button bye />
        </CardSection>
      </Card>
    </View>
  );
};

export default MealDetail;
