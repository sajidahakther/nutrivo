import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const MealDetail = ({ meal1 }) => {
  const { title, description, thumbnailimage, tags } = meal1;
  return (
    <Card>
    <View>
      <Image
        style={styles.mealThumbnail}
        source={{ uri: thumbnailimage }}
      />
    </View>

      <CardSection>
        <View>
          <Text style={styles.likeButton}> ♡ </Text>
        </View>
        <View style={styles.mealText}>
          <Text style={styles.mealTitle}>{title}</Text>
          <Text style={styles.mealDescription}>{description}</Text>
          <Text style={styles.mealTags}>{tags}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  mealThumbnail: {
    height: 200
  },

  likeButton: {
    fontSize: 30,
    color: '#ff0000',
  },
  mealText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 4
  },
  mealTitle: {
    fontWeight: 'bold'
  },
  mealDescription: {
    color: '#707070'
  },
  mealTags: {
    color: '#fff',
    backgroundColor: '#707070',
    padding: 2
  }
};

export default MealDetail;
