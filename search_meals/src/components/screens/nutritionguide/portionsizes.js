import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Body
} from 'native-base';

const cards = [
  {
    text: 'Two Cupped Hands (200g)',
    description: 'The recommended portion for mediterranean vegetables (mushroom, carrot, pepper) and leafy vegetables (lettuce, spinach, chicory)',
    image: require('../../assets/2hands.png'),
  },
  {
    text: 'One Cupped Hand (15-35g)',
    description: 'The recommended portion for dried fruits (goji berries, raisins, dates) and nuts such as almonds.',
    image: require('../../assets/1hand.png'),
  },
];

export default class FoodSwiper extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image style={styles.foodImage} source={item.image} />
                </CardItem>
                <CardItem header bordered>
                  <Text style={styles.foodName}>{item.text}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.mealDescription}>{item.description}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.instructions}>Swipe left or right to view more</Text>
                  </Body>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = {
  icon: {
    color: '#FA2133',
    fontSize: 17
  },
  foodName: {
    color: '#383838'
  },
  foodImage: {
    height: 300,
    flex: 1
  },
  mealDescription: {
    color: '#707070'
  },
  tagText: {
    fontSize: 14,
    color: '#575757'
  },
  checkIcon: {
    fontSize: 24,
    textAlign: 'left',
    color: '#1CD200'
  },
  instructions: {
      fontStyle: 'italic',
      color: '#7E7E7E',
    }
};
