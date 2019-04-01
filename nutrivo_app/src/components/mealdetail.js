import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const MealDetail = ({ meal1 }) => {
  const { title, description, thumbnailimage } = meal1;
  return (
    <Card>
    <View>
      <Image
        style={styles.thumbnailStyle}
        source={{ uri: thumbnailimage }}
      />
    </View>
      <CardSection>

        <View style={styles.mealDescriptionStyle}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  mealDescriptionStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  thumbnailStyle: {
    // flex: 1,
    height: 200
  }
};

export default MealDetail;
