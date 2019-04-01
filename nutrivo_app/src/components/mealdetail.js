import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const MealDetail = ({ meal1 }) => {
  const { title, description, thumbnailimage, tags } = meal1;
  const { mealThumbnail, likeButton, mealText, mealTitle, mealDescription, mealTags } = styles;

  return (
    <Card>
    <View>
      <Image
        style={mealThumbnail}
        source={{ uri: thumbnailimage }}
      />
    </View>

      <CardSection>
        <View>
          <Text style={likeButton}> ♡ </Text>
        </View>
        <View style={mealText}>
          <Text style={mealTitle}>{title}</Text>
          <Text style={mealDescription}>{description}</Text>
          <Text style={mealTags}>{tags}</Text>
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
    fontSize: 27,
    color: '#ff0000',
  },
  mealText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 5
  },
  mealTitle: {
    fontWeight: 'bold',
    color: '#383838', // dark grey
    fontSize: 17,
    paddingBottom: 2
  },
  mealDescription: {
    color: '#707070',
    paddingBottom: 2
  },
  mealTags: {
    color: '#818284',
    backgroundColor: '#F4F4F4',
    padding: 2
  }
};

export default MealDetail;
