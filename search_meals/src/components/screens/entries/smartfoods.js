import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Icon
} from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../assets/mainbg.png'),
  },
];

export default class SmartFoodSuggestions extends Component {
  render() {
    return (
      <View>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem header bordered>
                 <Text style={styles.textColour}>Smart Food Suggestions</Text>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = {
  textColour: {
    color: '#383838'
  },
};
