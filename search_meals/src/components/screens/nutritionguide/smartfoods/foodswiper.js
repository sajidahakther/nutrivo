import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Body,
  Icon
} from 'native-base';

const cards = [
  {
    text: 'Suggestion 1',
    name: 'One',
    image: require('../../../assets/mainbg2.png'),
  },
  {
    text: 'Suggestion 2',
    name: 'Two',
    image: require('../../../assets/mainbg2.png'),
  },
  {
    text: 'Suggestion 3',
    name: 'Three',
    image: require('../../../assets/mainbg2.png'),
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
                <Body>
                  <Text>High Nutrient Density</Text>
                </Body>
                <CardItem>
                  <Icon name="heart" style={styles.icon} />
                  <Text>{item.name}</Text>
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
  }
};
